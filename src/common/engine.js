import * as fs from "fs";
import * as path from "path";
import * as os from "os";

// import hidefile from 'hidefile';
// import winattr from 'winattr';

class FileEngine {
  // findWithExtension(root, ext, depth = 1) {
  //   let eFiles = [];
  //   if (depth === 0) return eFiles;
  //   try {
  //     const dirContent = fs.readdirSync(root);
  //     for (let item of dirContent) {
  //       const _path = path.join(root, item);
  //       try {
  //         const stats = fs.statSync(_path);
  //         if (item.endsWith(ext))
  //           eFiles.push({
  //             name: item,
  //             path: _path,
  //             isFile: stats.isFile(),
  //           });
  //         if (stats.isDirectory()) {
  //           const result = this.findWithExtension(_path, ext, depth - 1);
  //           eFiles = [...eFiles, ...result];
  //         }
  //       } catch (err) {
  //         const ignoreErrorCode = ["EPERM", "EBUSY"];
  //         if (!ignoreErrorCode.includes(err.code)) {
  //           console.log(err);
  //         }
  //       }
  //     }
  //     return eFiles;
  //   } catch (err) {
  //     const ignoreErrorCode = ["EPERM", "EBUSY"];
  //     if (!ignoreErrorCode.includes(err.code)) {
  //       console.log(err);
  //     }
  //   }
  // }
  // searchByPattern(root, pattern, depth = 0) {
  //   let nFile = [];
  //   if (depth === 0) return nFile;
  //   try {
  //     const dirContent = fs.readdirSync(root);
  //     for (let item of dirContent) {
  //       const _path = path.join(root, item);
  //       try {
  //         const stats = fs.statSync(_path);
  //         if (item.toLowerCase().search(pattern) >= 0)
  //           nFile.push({
  //             name: item,
  //             path: _path,
  //             isFile: stats.isFile(),
  //           });
  //         if (stats.isDirectory()) {
  //           const result = this.searchByPattern(_path, pattern, depth - 1);
  //           nFile = [...nFile, ...result];
  //         }
  //       } catch (err) {
  //         const ignoreErrorCode = ["EPERM", "EBUSY"];
  //         if (!ignoreErrorCode.includes(err.code)) {
  //           console.log(err);
  //         }
  //       }
  //     }
  //     return nFile;
  //   } catch (err) {
  //     const ignoreErrorCode = ["EPERM", "EBUSY"];
  //     if (!ignoreErrorCode.includes(err.code)) {
  //       console.log(err);
  //     }
  //   }
  // }
  // findHidden(root, depth = 1){
  //   const plateform = os.platform();
  //   let hFiles = [];  // List of hidden files...
  //   if( depth === 0) return hFiles;
  //   try {
  //     const dirContent = fs.readdirSync(root);
  //     for (let item of dirContent){
  //       const _path = path.join(root, item);
  //       try{
  //         const stats = fs.statSync(_path);
  //         if (plateform === 'win32'){
  //           const attrs = winattr.getSync(_path);
  //           if (attrs.hidden) {
  //             hFiles.push({
  //               name: item,
  //               path: _path,
  //               isFile: stats.isFile()
  //             });
  //           }
  //         }else{ // for different os...
  //           if (hidefile.isHiddenSync(_path) ) hFiles.push({
  //             name: item,
  //             path: _path,
  //               isFile: stats.isFile()
  //             });
  //         }
  //         if(stats.isDirectory()) {
  //           const  result  = this.findHidden(_path, depth-1);
  //           hFiles = [ ...hFiles, ...result ];
  //         }
  //       }
  //       catch (err){
  //         const ignoreErrorCode = ['EPERM','EBUSY'];
  //         if( !ignoreErrorCode.includes(err.code)){
  //           console.log(err);
  //         }
  //       }
  //     }
  //     return hFiles;
  //   } catch (err) {
  //     const ignoreErrorCode = ['EPERM','EBUSY'];
  //     if( !ignoreErrorCode.includes(err.code)){
  //       console.log(err);
  //     }
  //   }
  //   return hFiles;
  // }
}

export default FileEngine;
