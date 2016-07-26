var turtlePlugin = new Mod({
	name : "Turtle Plugin",
	version : "0.1",
	author : "pcr3w",
	
	// the preinit function is called before the mods are initiated to allow plugins to be stored
	preinit : function() {
		// you can store a plugin like this - with a key and value
		// the plugin can be anything, it doesn't have to necessarily be a function
		PluginManager.store("pcr3w.Turtle", function(world) {
			this._world = world;
			this._position = new BlockPos(0, 0, 0);
			this._previousPosition = new BlockPos(0, 0, 0);
			this._block = Blocks.get("stone");
			this._penDown = false;
			
			this.setPosition = function(position) {
				this._position = position;
			};
			
			this.start = function() {
				this._penDown = true;
			};
			
			this.stop = function() {
				this._penDown = false;
			};
			
			this.setBlock = function(block) {
				this._block = block;
			};
			
			this.up = function(amount) {
				this._previousPosition = this._position;
				this._position = this._position.up(amount);
				
				this._draw();
			};
			
			this.down = function(amount) {
				this._previousPosition = this._position;
				this._position = this._position.down(amount);
				
				this._draw();
			};
			
			this.north = function(amount) {
				this._previousPosition = this._position;
				this._position = this._position.north(amount);
				
				this._draw();
			};
			
			this.east = function(amount) {
				this._previousPosition = this._position;
				this._position = this._position.east(amount);
				
				this._draw();
			};
			
			this.south = function(amount) {
				this._previousPosition = this._position;
				this._position = this._position.south(amount);
				
				this._draw();
			};
			
			this.west = function(amount) {
				this._previousPosition = this._position;
				this._position = this._position.west(amount);
				
				this._draw();
			};
			
			this._draw = function() {
				if(this._penDown) {
					this._world.setBlocks(this._previousPosition, this._position, this._block);
				}
			}
		});
	}
});

ModRegistry.registerMod(turtlePlugin);