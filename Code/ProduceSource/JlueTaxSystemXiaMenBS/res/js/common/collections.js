/**
collection.js

Classes:
  Collections
  Arrays
  ArrayList
  SortedList extends ArrayList
  HashMap
  HashSet

version 1.0
author  ShengYoufu
since   2006-5-29
*/

/****************
Collections
NOTE:sort() return a new List
****************/
function Collections(){
  this.sort=function(){
    if(arguments.length==1){
      var s=new SortedList();
      s.addAll(arguments[0]);
      return s;
    }
    else if(arguments.length==2){
      var s=new SortedList();
      s.setComparator(arguments[1]);
      s.addAll(arguments[0]);
      return s;
    }
    else throw "IllegalArgument";
  }
}

/***************
* Arrays
****************/
function Arrays(){
  this.asList=function(arr){
    return new ArrayList(arr);
  }
}


/***************
/* ListIterator
****************/
function ListIterator(table,len){
  this.table=table;
  this.len=len;
  this.index=0;

  this.hasNext=function() {
    return this.index< this.len;
  }

  this.next=function() {
    if(!this.hasNext()) throw "No such Element!";
    return this.table[this.index++];
  }
}

/********************
* ArrayList
* use as ArrayList for java programmer
********************/
function testArrayList(){
  alert("ArrayList test begin:");
  try{
    var list=new ArrayList();
    assert(list.isEmpty());
    assert(list.size()==0);

    list.add(new Integer(100));
    list.add(new Integer(200));
    list.add(new Integer(33));

    assert(!list.isEmpty());
    assert(list.size()==3);

    var list2=new ArrayList();
    list2.add(new Integer(32));
    list2.addAll(list);
    assert(list2.size()==4);
    list2.add(new Integer(200));

    assert(list2.indexOf(new Integer(200))==2);
    assert(list2.lastIndexOf(new Integer(200))==4);

    assert(list2.contains(new Integer(200)));

    list2.removeAll(list);
    assert(list2.size()==2);
    assert(list2.contains(new Integer(200)));
    assert(list2.get(0).equals(new Integer(32)));

    list2.addAll(list);
    list2.retainAll(list);
    assert(list2.size()==4);
    assert(list2.get(0).intValue()==200);
    assert(list2.get(1).intValue()==100);
    assert(list2.get(2).intValue()==200);
    assert(list2.get(3).intValue()==33);

    assert(!list.equals(list2));
    list2.remove(0);
    assert(list.equals(list2));
    list2.set(0,new Integer(200));
    assert(!list.equals(list2));
    list2.set(1,new Integer(100));
    assert(list.equals(list2));

    assert(list.containsAll(list2));
    list2.clear();
    assert(list2.isEmpty());
    assert(list2.size()==0);
    assert(list.containsAll(list2));

    assert(!list2.iterator().hasNext());
    var it=list.iterator();
    assert(it.hasNext());
    it.next();
    assert(it.hasNext());
    it.next();
    assert(it.hasNext());
    it.next();
    assert(!it.hasNext());
  }
  catch(e){
    alert(e);
  }
  alert("ArrayList test end");
}

function ArrayList(){
  this.buffer=new Array();
  if(arguments.length>0) this.buffer=arguments[0];
  this.length=this.buffer.length;
}

ArrayList.prototype.hashCode=function(){
  var h=0;
  for(var i=0;i<this.lengh;i++)
    h+=this.buffer[i].hashCode();
  return h;
}

ArrayList.prototype.size=function(){
  return this.length;
}

ArrayList.prototype.clear=function(){
  for(var i=0;i<this.length;i++) this.buffer[i]=null;
  this.buffer.length=0;
  this.length=0;
}

ArrayList.prototype.isEmpty=function(){
  return this.length==0;
}

ArrayList.prototype.toArray=function(){
  var copy=new Array();
  for(var i=0;i<this.length;i++){
    copy[i]=this.buffer[i];
  }
  return copy;
}

ArrayList.prototype.get=function(index){
  if(index>=0 && index<this.length) return this.buffer[index];
  return null;
}

ArrayList.prototype.remove=function(param){
  var index=0;

  if(isNaN(param)){
    index=this.indexOf(param);
  }
  else index=param;

  if(index>=0 && index<this.length){
    for(var i=index;i<this.length-1;i++)
      this.buffer[i]=this.buffer[i+1];
    this.length-=1;
    return true;
  }
  else return false;
}

ArrayList.prototype.add=function(){
  var args=arguments;
  if(args.length==1){
    this.buffer[this.length++]=args[0];
    return true;
  }
  else if(args.length==2){
    var index=args[0];
    var obj=args[1];
    if(index>=0 && index<=this.length){
      for(var i=this.length;i>index;i--)
        this.buffer[i]=this.buffer[i-1];
      this.buffer[i]=obj;
      this.length+=1;
      return true;
    }
  }
  return false;
}

ArrayList.prototype.indexOf=function(obj){
  for(var i=0;i<this.length;i++){
    if(this.buffer[i].equals(obj)) return i;
  }
  return -1;
}

ArrayList.prototype.lastIndexOf=function(obj){
  for(var i=this.length-1;i>=0;i--){
    if(this.buffer[i].equals(obj)) return i;
  }
  return -1;
}

ArrayList.prototype.contains=function(obj){
  return this.indexOf(obj)!=-1;
}

ArrayList.prototype.equals=function(obj){
  if(this.size()!=obj.size()) return false;
  for(var i=0;i<this.length;i++){
    if(!obj.get(i).equals(this.buffer[i])) return false;
  }
  return true;
}

ArrayList.prototype.addAll=function(list){
  var mod=false;
  for(var it=list.iterator();it.hasNext();){
    var v=it.next();
    if(this.add(v)) mod=true;
  }
  return mod;
}

ArrayList.prototype.containsAll=function(list){
  for(var i=0;i<list.size();i++){
    if(!this.contains(list.get(i))) return false;
  }
  return true;
}

ArrayList.prototype.removeAll=function(list){
for(var i=0;i<list.size();i++){
  this.remove(this.indexOf(list.get(i)));
}
}

ArrayList.prototype.retainAll=function(list){
  for(var i=this.length-1;i>=0;i--){
    if(!list.contains(this.buffer[i])){
      this.remove(i);
    }
  }
}

ArrayList.prototype.subList=function(begin,end){
  if(begin<0) begin=0;
  if(end>this.length) end=this.length;
  var newsize=end-begin;
  var newbuffer=new Array();
  for(var i=0;i<newsize;i++){
    newbuffer[i]=this.buffer[begin+i];
  }
  return new ArrayList(newbuffer);
}

ArrayList.prototype.set=function(index,obj){
  if(index>=0 && index<this.length){
    temp=this.buffer[index];
    this.buffer[index]=obj;
    return temp;
  }
}

ArrayList.prototype.iterator=function iterator(){
  return new ListIterator(this.buffer,this.length);
}


/****************************
* HashMap
* used like java.lang.HashMap
****************************/
function HashMap() {
  private:
  this.len=8;
  this.table=new Array();
  this.length=0;

  function Entry(h,k,v,n){
    this.value = v;
    this.next = n;
    this.key = k;
    this.hash = h;

    this.getKey=function(){
      return this.key;
    }

    this.getValue=function() {
      return this.value;
    }

    this.setValue=function(newValue) {
      var oldValue = this.value;
      this.value = newValue;
      return oldValue;
    }

    this.equals=function(o){
      var e = o;
      var k1 = this.getKey();
      var k2 = e.getKey();
      var v1 = this.getValue();
      var v2 = e.getValue();
      return (k1.equals(k2) && v1.equals(v2));
    }

    this.hashCode=function() {
      return this.key.hashCode() ^ this.value.hashCode();
    }

    this.toString=function() {
      return this.getKey() + "=" + this.getValue();
    }
  }

  function HashIterator(table,index,ne){
    this.table=table;
    this.ne=ne;
    this.index=index;
    this.current=null;

    this.hasNext=function() {
      return this.ne != null;
    }

    this.next=function() {
      var e = this.ne;
      if (e == null)  throw "No such Element";
      var n = e.next;
      var t = this.table;
      var i = this.index;
      while (n == null && i > 0)
        n = t[--i];
      this.index = i;
      this.ne = n;
      this.current=e;
      return this.current;
    }
  }

  // refer to java.util.HashMap
  this.hash=function(x){
    var h = x.hashCode();
    h += ~(h << 9);
    h ^=  (h >>> 14);
    h +=  (h << 4);
    h ^=  (h >>> 10);
    return h;
  }

}

HashMap.prototype.rehash=function(){
  var oldTable = this.table;
  this.table=new Array();
  //transfer
  for (var i = 0; i< oldTable.length; i++) {
    var e = oldTable[i];
    if (e != null) {
      oldTable[i] = null;
      do {
        var next = e.next;
        var j = this.indexFor(e.hash);
        e.next = this.table[j];
        this.table[j] = e;
        e = next;
      } while (e != null);
    }
  }
}


/*****************************
* SortedList extends ArrayList
*
*****************************/
function testSortedList(){
  alert("SortedList test begin:");
  try{
    var list=new ArrayList();
    var s=new SortedList();
    s.add(new JavaString("WSG"));
    assert(s.size()==1);
    assert(s.indexOf(new JavaString("WSG"))==0);

    list.add(new JavaString("HELLO"));
    list.add(new JavaString("TOM"));
    list.add(new JavaString("BUSH"));
    s.add(new JavaString("SINA"));
    s.add(new JavaString("163"));
    s.add(new JavaString("CSDN"));
    s.addAll(list);
    assert(s.size()==7);
    assert(s.indexOf(new JavaString("SINA"))==4);
    assert(s.indexOf(new JavaString("SSN"))==5);
    assert(s.indexOf(new JavaString("SA"))==4);
    //var s2=s.subList(4,7);
    for(var i=0;i<s.size();i++){
      alert(s.get(i));
    }
  }
  catch(e){
    alert(e);
  }
  alert("SortedList test end");
}


function SortedList(){
  private:
  this.com=null;
}

SortedList.prototype=new ArrayList();

SortedList.prototype.setComparator=function(comp){
  if(this.length!=0) throw "Only can be set when list is empty";
  this.com=comp;
}

SortedList.prototype.getComparator=function(){
  return this.com;
}

//override
SortedList.prototype.add=function(obj){
  var index = this.indexOf(obj);
  for(var i=this.length;i>index;){
    this.buffer[i]=this.buffer[--i];
  }

  this.buffer[index]=obj;
  this.length++;
}
//override
SortedList.prototype.indexOf=function(obj){
  if(this.length==0) return 0;

  var min=0,max=this.length-1;
  var mid=0;
  while(min<=max){
    mid = (min+max) >> 1;
    var c=0;
    if(this.com==null) c=obj.compareTo(this.buffer[mid]);
    else c=this.com.compare(obj,this.buffer[mid]);

    if(c==0){
      return mid;
    }
    else if(c<0){
      max=mid-1;
    }
    else{
      min=mid+1;
    }
  }
  mid =(min+max) >>1;
  return mid+1;
}

//override
SortedList.prototype.contains=function(obj){
  if(this.length==0) return false;
  var min=0,max=this.length-1;
  var mid=0;
  while(min<=max){
    mid = (min+max) >> 1;
    var c=0;
    if(this.com==null) c=obj.compareTo(this.buffer[mid]);
    else  c=this.com.compare(obj,this.buffer[mid]);
    if(c==0){
      return true;
    }
    else if(c<0){
      max=mid-1;
    }
    else{
      min=mid+1;
    }
  }
  return false;
}

//override
SortedList.prototype.subList=function(begin,end){
  var sl=new SortedList();
  s1.setComparator(this.com);
  var sub=ArrayList.prototype.subList(begin.end);
  sl.addAll(sub);
  return sl;
}


/****************************
* HashSet.js
* use as java.util.HashSet
*****************************/

function testHashSet(){
  alert("HashSet test begin:");
  try{

  }
  catch(e){
  alert(e);
  }
  alert("HashSet test end");
}


function HashSet(){
  private:
  this.map=new HashMap();
  this.ZERO=new Integer(0);
  this.NULL=new Number("!THIS IS NULL!");

  function HashSetIterator(ite){
    this.it=ite;
    this.hasNext=function (){
      return this.it.hasNext();
    }

    this.next=function (){
      return this.it.next().getKey();
    }
  }
}

HashSet.prototype.size=function (){
  return this.map.size();
}

HashSet.prototype.isEmpty=function (){
  return this.map.isEmpty();
}

HashSet.prototype.contains=function (o){
  return this.map.containsKey(o);
}

HashSet.prototype.add=function (o){
  return this.map.put(o,HashSet.NULL)==null;
}

HashSet.prototype.addAll=function (set){
  var mod=false;
  for(var it=set.iterator();it.hasNext();){
    if(this.add(it.next()))mod=true;
  }
  return mod;
}

HashSet.prototype.remove=function (o){
  return this.map.remove(o).equals(HashSet.NULL);
}

HashSet.prototype.clear=function (){
  this.map.clear();
}

HashSet.prototype.iterator=function (){
  return new HashSetIterator(this.map.iterator());
}

HashSet.prototype.equals=function (o){
  //if(!this.typeMatches(o))return false;
  if(o.size()!=this.size())return false;
  for(var it=this.iterator();it.hasNext();){
    if(!o.contains(it.next()))return false;
  }
  return true;
}

HashSet.prototype.hashCode=function (){
  var h=0;
  for(var it=this.iterator();it.hasNext();){
    h+=it.next().hashCode();
  }
  return h;
}

HashSet.prototype.toArray=function (){
  var arr=new Array();
  var i=0;
  for(var it=this.iterator();it.hasNext();){
    arr[i++]=it.next();
  }
  return arr;
}
