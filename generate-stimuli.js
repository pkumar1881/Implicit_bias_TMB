function generate_stimulus(shape, number, color, size){
  
  var stim_width = 200;
  var stim_height = 200;
  var padding = 4;
  
  var stim = SVG().size(stim_width, stim_height);

  var stim_locs = [];

  if(shape == 'circle'){
    for(var i=0; i<number; i++){
      var x = Math.floor(Math.random()*(stim_width-size));
      var y = Math.floor(Math.random()*(stim_width-size));
      while(check_bb_collision(stim_locs, {x,y}, size, padding)){
        x = Math.floor(Math.random()*(stim_width-size));
        y = Math.floor(Math.random()*(stim_width-size));
      }
      stim_locs.push({x,y})
      stim.circle(size).move(x,y).attr({fill: color});
    }
  }

  if(shape == 'triangle'){
    for(var i=0; i<number; i++){
      var x = Math.floor(Math.random()*(stim_width-size));
      var y = Math.floor(Math.random()*(stim_width-size));
      while(check_bb_collision(stim_locs, {x,y}, size, padding)){
        x = Math.floor(Math.random()*(stim_width-size));
        y = Math.floor(Math.random()*(stim_width-size));
      }
      stim_locs.push({x,y})
      
      stim.polygon().plot([[x,y+size], [x+size/2,y],[x+size, y+size]]).attr({fill:color})
    }
  }

  if(shape == 'square'){
    for(var i=0; i<number; i++){
      var x = Math.floor(Math.random()*(stim_width-size));
      var y = Math.floor(Math.random()*(stim_width-size));
      while(check_bb_collision(stim_locs, {x,y}, size, padding)){
        x = Math.floor(Math.random()*(stim_width-size));
        y = Math.floor(Math.random()*(stim_width-size));
      }
      stim_locs.push({x,y})
      
      stim.rect(size,size).move(x,y).attr({fill:color})
    }
  }

  if(shape == 'star'){
    for(var i=0; i<number; i++){
      var x = Math.floor(Math.random()*(stim_width-size));
      var y = Math.floor(Math.random()*(stim_width-size));
      while(check_bb_collision(stim_locs, {x,y}, size, padding)){
        x = Math.floor(Math.random()*(stim_width-size));
        y = Math.floor(Math.random()*(stim_width-size));
      }
      stim_locs.push({x,y})
      
      stim.polygon().plot([
        [x + size*.5,y], 
        [x+size*.6,y+size*.4],
        [x+size,y+size*.5],
        [x+size*.6,y+size*.6],
        [x+size*.5,y+size],
        [x+size*.4,y+size*.6],
        [x,y+size*.5],
        [x+size*.4,y+size*.4]
      ]).attr({fill:color})
    }
  }
  
  if(shape == 'oval'){
    for(var i=0; i<number; i++){
      var x = Math.floor(Math.random()*(stim_width-size));
      var y = Math.floor(Math.random()*(stim_width-size));
      while(check_bb_collision(stim_locs, {x,y}, size, padding)){
        x = Math.floor(Math.random()*(stim_width-size));
        y = Math.floor(Math.random()*(stim_width-size));
      }
      stim_locs.push({x,y})
      
      stim.ellipse(size*0.75,size).move(x,y).attr({fill:color})
    }
  }

  if(shape == 'cross'){
    for(var i=0; i<number; i++){
      var x = Math.floor(Math.random()*(stim_width-size));
      var y = Math.floor(Math.random()*(stim_width-size));
      while(check_bb_collision(stim_locs, {x,y}, size, padding)){
        x = Math.floor(Math.random()*(stim_width-size));
        y = Math.floor(Math.random()*(stim_width-size));
      }
      stim_locs.push({x,y})
      
      stim.polygon().plot([
        [x+size*0, y+size*0.8], 
        [x+size*.2,y+size*0.8],
        [x+size*.2, y+size*1],
        [x+size*.8,y+size*1],
        [x+size*.8,y+size*0.8],
        [x+size*1,y+size*0.8],
        [x+size*1, y+size*0.2],
        [x+size*0.8, y+size*0.2],
        [x+size*0.8,y+size*0],
        [x+size*0.2,y+size*0],
        [x+size*0.2,y+size*0.2],
        [x+size*0,y+size*0.2]
      ]).attr({fill:color})
    }
  }

  if(shape == 'diamond'){
    for(var i=0; i<number; i++){
      var x = Math.floor(Math.random()*(stim_width-size));
      var y = Math.floor(Math.random()*(stim_width-size));
      while(check_bb_collision(stim_locs, {x,y}, size, padding)){
        x = Math.floor(Math.random()*(stim_width-size));
        y = Math.floor(Math.random()*(stim_width-size));
      }
      stim_locs.push({x,y})
      
      stim.polygon().plot([
        [x+size*0, y+size*0.5], 
        [x+size*0.5,y+size*1],
        [x+size*1, y+size*0.5],
        [x+size*0.5,y+size*0]
      ]).attr({fill:color})
    }
  }

  if(shape == 'pentagon'){
    for(var i=0; i<number; i++){
      var x = Math.floor(Math.random()*(stim_width-size));
      var y = Math.floor(Math.random()*(stim_width-size));
      while(check_bb_collision(stim_locs, {x,y}, size, padding)){
        x = Math.floor(Math.random()*(stim_width-size));
        y = Math.floor(Math.random()*(stim_width-size));
      }
      stim_locs.push({x,y})

      var c1 = 0.5 * 0.25 * (Math.sqrt(5)-1)
      var c2 = 0.5 * 0.25 * (Math.sqrt(5)+1)
      var s1 = 0.5 * 0.25 * (Math.sqrt(10 + 2*Math.sqrt(5)))
      var s2 = 0.5 * 0.25 * (Math.sqrt(10 - 2*Math.sqrt(5)))
      
      stim.polygon().plot([
        [x+size*0.5, y+size*0], 
        [x+size*0.02,y+size*0.35],
        [x+size*.21,y+size*.9],
        [x+size*.79,y+size*.9],
        [x+size*0.98,y+size*0.35],
      ]).attr({fill:color})
    }
  }

  if(shape == 'crescent'){
    for(var i=0; i<number; i++){
      var x = Math.floor(Math.random()*(stim_width-size));
      var y = Math.floor(Math.random()*(stim_width-size));
      while(check_bb_collision(stim_locs, {x,y}, size, padding)){
        x = Math.floor(Math.random()*(stim_width-size));
        y = Math.floor(Math.random()*(stim_width-size));
      }
      stim_locs.push({x,y})

      //stim.rect(size,size).move(x,y).attr({fill:"#888"})
      
      stim.path()
        .M({x:x+size*1, y:y+size*0})
        .A(size,size*0.5,0,0,0,{x:x+size*1, y:y+size*1})
        .A(size,size*0.75,0,0,1,{x:x+size*1, y:y+size*0})
        .attr({fill:color})
    }
  }

  if(shape == 'hexagon'){
    for(var i=0; i<number; i++){
      var x = Math.floor(Math.random()*(stim_width-size));
      var y = Math.floor(Math.random()*(stim_width-size));
      while(check_bb_collision(stim_locs, {x,y}, size, padding)){
        x = Math.floor(Math.random()*(stim_width-size));
        y = Math.floor(Math.random()*(stim_width-size));
      }
      stim_locs.push({x,y})
      
      stim.polygon().plot([
        [x+size*0, y+size*0.5], 
        [x+size*0.25,y+size*0.07],
        [x+size*0.75, y+size*0.07],
        [x+size*1, y+size*0.5], 
        [x+size*0.75,y+size*0.93],
        [x+size*0.25,y+size*0.93],
      ]).attr({fill:color})
    }
  }

  if(shape == 'cone'){
    for(var i=0; i<number; i++){
      var x = Math.floor(Math.random()*(stim_width-size));
      var y = Math.floor(Math.random()*(stim_width-size));
      while(check_bb_collision(stim_locs, {x,y}, size, padding)){
        x = Math.floor(Math.random()*(stim_width-size));
        y = Math.floor(Math.random()*(stim_width-size));
      }
      stim_locs.push({x,y})
      
      stim.path()
        .M({x:x,y:y+size*0.5})
        .L({x:x+size*0.5,y:y+size*1})
        .L({x:x+size*1,y:y+size*0.5})
        .A(size, size*3, 0, 0, 0, {x:x,y:y+size*0.5})
        .attr({fill:color})
    }
  }

  if(shape == 'rectangle'){
    for(var i=0; i<number; i++){
      var x = Math.floor(Math.random()*(stim_width-size));
      var y = Math.floor(Math.random()*(stim_width-size));
      while(check_bb_collision(stim_locs, {x,y}, size, padding)){
        x = Math.floor(Math.random()*(stim_width-size));
        y = Math.floor(Math.random()*(stim_width-size));
      }
      stim_locs.push({x,y})
      
      stim.rect(size,size*0.8).move(x,y).attr({fill:color})
    }
  }

  return stim;
}

function check_bb_collision(existing_locs, new_loc, size, padding){
  if(existing_locs.length == 0){
    return false;
  }
 
  for(var i=0; i<existing_locs.length; i++){
    var x_min = existing_locs[i].x - size - padding;
    var x_max = existing_locs[i].x + size + padding;

    var y_min = existing_locs[i].y - size - padding;
    var y_max = existing_locs[i].y + size + padding;

    if(new_loc.x > x_min && new_loc.x < x_max){
      if(new_loc.y > y_min && new_loc.y < y_max){
        return true;
      }
    }
  }
  return false;
}