app.controller("listCtrl",["$scope",function(t){t.db=new PouchDB("dotlist"),t.allLists=[],t.list=[],t.listTitle="",t.menuopen=!1,t.init=function(){t.db.info().then(function(e){console.log(e),0==e.doc_count&&t.db.put({_id:"lists",lists:[]})}),t.getLists()},t.addItem=function(){t.list.push({id:t.list.length+1,title:t.itemTitle,complete:!1}),t.itemTitle=""},t.deleteItem=function(e){confirm("Are you sure you want to delete "+t.list[e].title+"?")&&t.list.splice(e,1)},t.checkItem=function(e){t.list[e].complete=t.list[e].complete?!1:!0},t.createList=function(){t.allLists.push({title:t.listTitle,items:t.list,id:t.allLists.length+1}),console.log(t.allLists),t.list=[],t.listTitle="",$("#overlay").hide(),$(".modalen").hide(),t.saveLists()},t.menuAction=function(){"-80px"==$("#menu-bar").css("bottom")?($("#menu-bar").css("bottom","0"),$(".hamburger").css("margin-top","-160px")):($("#menu-bar").css("bottom","-80px"),$(".hamburger").css("margin-top","0px"))},t.search=function(){$(".search-bar").slideToggle("slow"),t.menuAction()},t.openModal=function(){$("#overlay").fadeIn().find(".modalen").fadeIn(),t.menuAction()},t.closeModal=function(){$("#overlay").fadeOut().find(".modalen").fadeOut()},t.getLists=function(){t.db.get("lists").then(function(e){console.log(e.lists),t.$apply(function(){t.allLists=e.lists})})},t.saveLists=function(){t.db.get("lists").then(function(e){return t.db.put({_id:e._id,_rev:e._rev,lists:t.allLists})})}}]);