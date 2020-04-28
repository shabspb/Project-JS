import React, { Component } from 'react';

/* import nextId from 'react-id-generator'; */

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: 'Going to learn React', important: true, like: false, id: 1 },
        { label: 'That is so good', important: false, like: false, id: 2 },
        { label: 'I need a break...', important: false, like: false, id: 3 },
      ],
      term: '',
      filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this); // привязываем (биндим) контекст вызова функции 
    // удаления элемента
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) { // удаляет элемент
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id); // ищет по индексу id в массиве data и сравнивает его с нажатым id элемента?
      // после чего записывает индекс нажатого элемента в переменную

      // напрямую менять state нельзя, поэтому создаём две переменные и новый массив из них
      const before = data.slice(0, index); // переменная с массивом с первого элемента до нажатого элемента

      const after = data.slice(index + 1); // переменная с массивом с нажатого элемента до последнего элемента

      const newArr = [...before, ...after]; // новый массив с разворотом двух массивом и объединением их в один
      // const newArr = [...data.slice(0, index), data.slice(index + 1)] - более чистый способ записи

      return {
        data: newArr, // возвращаем новый массив, не изменения state напрямую!
      };
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      };
    })
  }

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];
      const newItem = { ...old, important: !old.important };

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    });
  }

  onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];      
      const newItem = { ...old, like: !old.like };

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    });
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1
    });
  }

  filterPost(items, filter) {
    if (filter === 'like') {
      return items.filter(item => item.like)
    } else {
      return items
    }
  }

  onUpdateSearch(term) {
    this.setState({ term });
  }

  onFilterSelect(filter) {
    this.setState({ filter });
  }


  render() {
    const { data, term, filter } = this.state;

    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
    return (
      <div className="app">
        <AppHeader
          liked={liked}
          allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect} />
        </div>
        <PostList
          posts={visiblePosts}
          // вызываем функцию удаления элемента
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm
          onAdd={this.addItem}
        />
      </div>
    );
  }
}
