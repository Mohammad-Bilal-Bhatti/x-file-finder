import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

import Header from "./components/header";
import Footer from "./components/footer";
import List from "./components/list";
import Table from "./components/table/table";
import SearchForm from "./components/searchfrom";
import DisplayCard from "./components/displaycard";
import Pagination from "./components/table/pagination";

import * as page from "./common/pagination";
import sort from "./common/sort";

import Engine from './common/engine';

class App extends Component {
  state = {
    data: {
      dirLabel: "Select Directory",
      searchPattern: "",
    },
    error:{
      name: 'searchBtn',
      message: 'By Default Disable Button'
    },
    sortedColumn: {
      name: "",
      asc: true,
    },

    pagination: {
      selected: 1,
      pageSize: 30,
    },
    list: {
      items: [
        { key: "0", label: "File Search" },
        { key: "1", label: "Folder Search" },
        { key: "2", label: "Hidden File Search" },
        { key: "3", label: "Hidden Folder Search" },
        { key: "4", label: "Search via Extension" },
      ],
      selected: "0",
    },

    table: {
      columns: [
        { key: "name", label: "Name" },
        { key: "type", label: "Type" },
        { key: "path", label: "Relative Path" },
        { key: "mdate", label: "Modified Date" },
        { key: "mtime", label: "Modified Time" },
        { key: "delete", label: "Delete" },
        { key: "info", label: "Info" },
        { key: "open", label: "Open" },
      ],
      data: [],
    },
  };

  componentDidMount() {
    console.log("componenet mooundt completed");
  }

  handleOpenBtnClick = (item) => {
    console.log("open Btn Clicked!");
    const element = document.getElementById("fileInput");
    console.log(element);
  };
  handleInfoBtnClick = (item) => {
    console.log("Info Btn Clicked!");
  };
  handleDeleteBtnClick = (item) => {
    console.log("Delete Btn Clicked!");
  };

  handleSearch = () => {
    console.log('Search...');

    const { data, list } = this.state;

    const pattern = data.searchPattern;
    const root = data.dirLabel;


    console.log('Path: ', root);
    console.log('Pattern: ', pattern);

    // const engine = new Engine();
    const selected = Number( list.selected );

    switch (selected) {
      case 0:
        console.log('File Search');
        break;
      case 1:
        console.log('Folder Search');
        break;
      case 2:
        console.log('Hidden File Search');
        break;
      case 3:
        console.log('Hidden Folder Search');
        break;
      case 4:
        console.log('Search via Extension');
        break;
            
      default:
        break;
    }
    
  }

  handleListClick = (selectedItem) => {
    const list = { ...this.state.list };
    list.selected = selectedItem.key;
    this.setState({ list });
  };

  handlePageClick = (pageNo) => {
    const pagination = { ...this.state.pagination };
    pagination.selected = pageNo;
    this.setState({ pagination });
  };

  handleColumnSort = (columnName) => {
    const sortedColumn = { ...this.state.sortedColumn };
    if (sortedColumn.name === columnName) sortedColumn.asc = !sortedColumn.asc;
    else sortedColumn.name = columnName;
    this.setState({ sortedColumn });
  };

  mapFiles = (files) => {
    let id = 1;
    return files.map((file) => {
      return {
        id: id++,
        name: file.name,
        type: file.name.slice(file.name.lastIndexOf(".")),
        relativePath: file.webkitRelativePath,
        modifiedDate: file.lastModifiedDate.toDateString(),
        modifiedTime: file.lastModifiedDate
          .toTimeString()
          .match(/\d{2}:\d{2}:\d{2}/)[0],
      };
    });
  };

  handleFileSelect = (files) => {
    // When webkitdirectory is selected...
    // const data = this.mapFiles([...files]);

    // const table = { ...this.state.table };
    // table.data = data;

    // this.setState({ table });

   

    const filePath = files[0].path;
    const index = filePath.lastIndexOf("\\");
    const parent = filePath.slice(0, index + 1);
    const data = { ...this.state.data };
    data.dirLabel = parent;
    this.setState({ data });
  };

  handleChange = (event) => {
    const { name: inputName, value: inputValue } = event.target;
    const data = { ...this.state.data };
    data[inputName] = inputValue;


    const pattern = data.searchPattern;
    const root = data.dirLabel;

    let error = undefined;

    if (pattern.length === 0){
      error = {
        name: 'searchBtn',
        message: 'pattern not provided...'
      }
      return this.setState({data,error});
    }

    if (root === "Select Directory"){
      error = {
        name: "selectDirError",
        message: "Please select the folder where to start scan."
      }
    }


    this.setState({ data, error });
  };

  render() {
    const data = [...this.state.table.data];
    const { selected: pageNumber, pageSize } = this.state.pagination;

    const pageData = page.default.paginate(data, pageNumber, pageSize);

    const { name: columnName, asc: sortOrder } = this.state.sortedColumn;
    const sortData = sort(pageData, columnName, sortOrder);

    return (
      <React.Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 mb-4">
              <List
                items={this.state.list.items}
                selected={this.state.list.selected}
                onClick={this.handleListClick}
              />
            </div>
            <div className="col-lg-9">
              <div className="row mb-4">
                <SearchForm
                  dirLable={this.state.data.dirLabel}
                  searchPattern={this.state.data.searchPattern}
                  error={this.state.error}
                  onFileSelect={this.handleFileSelect}
                  onChange={this.handleChange}
                  onSubmit = {this.handleSearch}
                />
              </div>
              <div className="row mb-4 justify-content-center align-items-center">
                <DisplayCard
                  color="success"
                  title="164"
                  subtitle="Files Found"
                />
                <DisplayCard
                  color="danger"
                  title="41"
                  subtitle="Hidden Files Found"
                />
                <DisplayCard
                  color="dark"
                  title="21"
                  subtitle="Hidden Folders Found"
                />
              </div>
              <Table
                columns={this.state.table.columns}
                sortedColumn={this.state.sortedColumn}
                data={sortData}
                onColumnSort={this.handleColumnSort}
                onOpen={this.handleOpenBtnClick}
                onInfo={this.handleInfoBtnClick}
                onDelete={this.handleDeleteBtnClick}
              />
              <div className="d-flex flex-row-reverse mx-4">
                <Pagination
                  selected={this.state.pagination.selected}
                  pageSize={this.state.pagination.pageSize}
                  totalItems={this.state.table.data.length}
                  onPageClick={this.handlePageClick}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
