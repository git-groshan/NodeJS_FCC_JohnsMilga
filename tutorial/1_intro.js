// GLOBAL VARIBLES - ACCESS everywhere 
//NO WINDOW OBJECT IN NODE 
// __dirname - path to current directory 
// __filename - file name 
// require - function to use modules (commonJS)
// module - info about current module(file)
// process - info about env where the program is being executed 

console.log("current dir is ",__dirname);
console.log("current filename  is ",__filename);
setInterval(()=>{
    console.log("Hello World")
} , 1000)
