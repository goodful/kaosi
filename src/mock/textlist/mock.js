let Mock = require("mockjs");
let data=[
    {title:"中国npm镜像源升级公告1",id:"1",author:"fengmk2",see:"46583",answer:"12"},
    {title:"中国npm镜像源升级公告2",id:"2",author:"fengmk2",see:"46583",answer:"12"},
    {title:"中国npm镜像源升级公告3",id:"3",author:"fengmk2",see:"46583",answer:"12"},
    {title:"中国npm镜像源升级公告4",id:"4",author:"fengmk2",see:"46583",answer:"12"},
    {title:"中国npm镜像源升级公告5",id:"5",author:"fengmk2",see:"46583",answer:"12"},
    {title:"中国npm镜像源升级公告6",id:"6",author:"fengmk2",see:"46583",answer:"12"},
    {title:"中国npm镜像源升级公告7",id:"7",author:"fengmk2",see:"46583",answer:"12"},
    {title:"中国npm镜像源升级公告8",id:"8",author:"fengmk2",see:"46583",answer:"12"}
]
Mock.mock("/api/textlist","get",function(config){
    console.log(config);
    return data;
})
// Mock.mock("/api/textlist","delete",function(config){
//     console.log(config);
//     return data;
// })