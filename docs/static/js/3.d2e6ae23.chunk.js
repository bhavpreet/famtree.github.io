(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{15:function(e,t,n){"use strict";n.r(t);var a,r,i,o,h,s,g,d,l=n(14),u=n.n(l),c=n.p+"static/media/Good Brush.19cfbd40.otf",p=n.p+"static/media/button-37.c5f8c924.wav",w=(n(3),[]),v=[],f=2,m=[],y=2;function b(e,t,n){var r=0;return(e.length-(2*t+1))%2==0?(parent=(e.length-1)/2,r=-a.PI/4.5,w.push(e[parent].branch(a,r,t))):(parent=(e.length-2)/2,r=a.PI/5.5,w.push(e[parent].branch(a,r,t))),w[w.length-1].entry=n,w[w.length-1].level=t,e.push(w[w.length-1]),r}function x(e){if("Natasha"==e.relatedTo){var t=Math.pow(2,y);b(m,y,e),m.length+1==t&&(y+=1)}else"Bhavpreet"==e.relatedTo&&(t=Math.pow(2,f),b(v,f,e),v.length+1==t&&(f+=1));1==e.isNew&&i.play()}function I(e){return{name:r.getString(e,0),relation:r.getString(e,1),age:r.getString(e,2),relatedTo:r.getString(e,3),rsvp:r.getString(e,4)}}t.default=x,new u.a(function(e){a=e,e.preload=function(){r=e.loadTable("https://docs.google.com/spreadsheets/d/1ugOJeRIHwUR36fp1-MawZqqw1_X29q4nrLiKM_gu9FI/gviz/tq?tqx=out:csv&sheet=Sheet1","csv","header"),d=e.loadFont(c),i=new Audio(p)},e.windowResized=function(){a.resizeCanvas(e.windowWidth,e.windowHeight/1.5),a.redraw()},e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight/1.5),e.textSize(23),o=e.loadImage("04_young-min.png"),h=e.loadImage("03_adult-min.png"),s=e.loadImage("02_elder-min.png"),g=e.loadImage("01_eldest-min.png");var t=new function e(t,n,a){this.begin=t,this.end=n,this.level=a,this.finished=!1,this.jitter=function(e){this.end.x+=e.random(-.125,.125),this.end.y+=e.random(-.125,.125)},this.show=function(e){e.push(),e.stroke(0),e.strokeWeight(15/(.8*(this.level+1)));var t=u.a.Vector.sub(this.end,this.begin);e.translate(this.begin.x,this.begin.y),e.rotate(t.heading());var n=t.mag(),r=-1;a%2==0&&(r=1),e.curve(-1.3*n,r*-n/1.3,0,0,n,0,1.5*n,r*n/1.5),e.pop()},this.branch=function(t,n,a){var r=u.a.Vector.sub(this.end,this.begin);r.rotate(n);var i=t.width;i>600&&(i=600),r.mult(.42+(i-0)/2048);var o=u.a.Vector.add(this.end,r);return new e(this.end,o,a)}}(e.createVector(e.width/2,e.height),e.createVector(e.width/2,e.height-e.height/4.5),0);w[0]=t,w.push(w[0].branch(e,-e.PI/4.5,1)),w[w.length-1].entry=I(0),m.push(w[w.length-1]),w.push(w[0].branch(e,e.PI/4.5,1)),w[w.length-1].entry=I(1),v.push(w[w.length-1]),function(e){for(var t=2;t<e.getRowCount();t++){x(I(t))}}(r)},e.draw=function(){var t;e.background(255);for(var n=0;n<w.length;n++)(t=w[n]).show(e);var a=0;for(n=1;n<w.length;n++){var r=u.a.Vector.sub((t=w[n]).end,t.begin),i=e.createVector(r.x,r.y);i.normalize(),e.push(),e.translate(t.begin.x,t.begin.y),e.rotate(r.heading()),e.translate(r.mag()+35/2.1,0),e.imageMode(e.CENTER),e.rotate(e.PI/2);var l=o;"Young at \ud83d\udc96"==t.entry.age?l=o:"Above 50"==t.entry.age?l=g:"30-50"==t.entry.age?l=s:"20-30"==t.entry.age?l=h:"< 20"==t.entry.age&&(l=o),e.dist(e.mouseX,e.mouseY,35*i.x*.75+t.end.x,35*i.y*.75+t.end.y)<17.5||1==t.entry.isNew?(e.image(l,0,0,73.5,73.5),1==t.entry.isNew&&a++):e.image(l,0,0,35,35),e.pop()}var c=[];for(n=1;n<w.length;n++){var p=w[n],v=u.a.Vector.sub(p.end,p.begin),f=e.createVector(v.x,v.y);f.normalize(),(e.dist(e.mouseX,e.mouseY,35*f.x*.75+p.end.x,35*f.y*.75+p.end.y)<17.5||p.entry.isNew)&&c.push(p)}if(c.length>0){var m="",y=c.length;a!=c.length&&(y-=a);for(var b=0;b<y;b++){var x=c[b];m=m+x.entry.name+"  / "+x.entry.relation+"\n"}var I=c[0].end;e.stroke(0),e.fill(255),e.textLeading(20),e.textFont(d),e.textSize(16),e.textAlign(e.width<600?"Natasha"==c[0].entry.relatedTo?e.LEFT:e.RIGHT:"Natasha"==c[0].entry.relatedTo?e.RIGHT:e.LEFT),e.text(m,I.x,I.y)}}},"sketchCanvas")}}]);
//# sourceMappingURL=3.d2e6ae23.chunk.js.map