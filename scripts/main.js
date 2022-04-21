Vars.content.units().each(u => {
  u.health *= 4;
});

Vars.content.blocks().each(b => {
  if (b instanceof Turret){
    var stack = b.requirements;
    for (var i = 0; i < stack.length; i++){
      stack[i].amount *= 3;
    }
    return;
  };
  if (b instanceof Reconstructor){
    var consumes = b.consumes.get(ConsumeType.item).items;
    for(var i = 0; i < consumes.length; i++){
      consumes[i].amount *= 4;
    };
    return;
  };
  if (b instanceof UnitFactory){
    var plans = b.plans;
    for(var i = 0; i < plans.size; i++){
      var stack = plans.get(i).requirements;
      for(var j = 0; j < stack.length; j++){
        stack[j].amount *= 4;
      }
    };
    return;
  };
  if (b instanceof PowerGenerator){
    b.powerProduction = (b.powerProduction * 1/3);
    return;
  }
})
