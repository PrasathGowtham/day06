let name1="Casino Royal";
let name2=" Royal";
let name3="Econ Production";
let name4="GP Production";
let name5="PG13";
let name6="PG";



let list = {tittle:{tittle1:name1,tittle2:name2},studio:{studio1:name3,studio2:name4},rating:{rating1:name5,rating2:name6}};


class movie{
constructor(list){
this.tittle=list.tittle;
this.studio=list.studio;
this.rating=list.rating;
}
getPG(){
return this.tittle + " " + this.studio + " " + this.rating;
}


}
let movie1 = new movie(list);
console.log(movie1.tittle.tittle1);
console.log(movie1.studio.studio1);
console.log(movie1.rating.rating1);
