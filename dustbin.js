class dustbin
{
	constructor(x,y)
	{

		var options={
			isStatic:true
		}
			
		this.bottomBody = Bodies.rectangle(1225,600,180,20,options);
		this.leftWallBody = Bodies.rectangle(1150,600,20,150,options);
		this.rightWallBody = Bodies.rectangle(1300,600,20,150,options);
		
		this.image = loadImage("dustbingreen.png");

		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;
	
			push();
			imageMode(CENTER);
			image(this.image,posBottom.x,posBottom.y,130,130);
			pop();

			
	}

}