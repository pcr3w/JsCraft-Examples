var redstoneStriker = new Mod({
	name : "Redstone Striker",
	version : "1.0",
	author : "pcr3w",
	
	init : function() {
		var hiddenRedstoneSourceTileEntity = new TileEntity({
			update : function(age, world, pos, nbt) {
				if(age >= 10) {
					world.removeTileEntity(pos);
					world.setBlock(pos, Blocks.get("air"));
				}
			}
		});
		
		TileEntityRegistry.registerTileEntity(hiddenRedstoneSourceTileEntity, "hiddenRedstoneSourceTileEntity");
		
		var hiddenRedstoneSource = new Block({
			solid : false,
			tileEntity : "hiddenRedstoneSourceTileEntity",
			
			isOpaqueCube : function() {
				return false;
			},
			
			getStrongPower : function(pos) {
				return 15;
			},
			
			getWeakPower : function(pos) {
				return 15;
			}
		});
		
		BlockRegistry.registerBlock(hiddenRedstoneSource, "hiddenRedstoneSource");
		
		var redstoneStriker = new Item({
			onRightClickBlock : function(itemstack, world, player, blockPos) {
				if(!(itemstack.getDamage() >= itemstack.getMaxDamage()) && world.getBlock(blockPos.up()).is(Blocks.get("air"))) {
					itemstack.damageItem(1);
					
					world.setBlock(blockPos.up(), hiddenRedstoneSource);
				} else if(!(itemstack.getDamage() >= itemstack.getMaxDamage()) && world.getBlock(blockPos.down()).is(Blocks.get("air"))) {
					itemstack.damageItem(1);
					
					world.setBlock(blockPos.down(), hiddenRedstoneSource);
				} else if(!(itemstack.getDamage() >= itemstack.getMaxDamage()) && world.getBlock(blockPos.north()).is(Blocks.get("air"))) {
					itemstack.damageItem(1);
					
					world.setBlock(blockPos.north(), hiddenRedstoneSource);
				} else if(!(itemstack.getDamage() >= itemstack.getMaxDamage()) && world.getBlock(blockPos.east()).is(Blocks.get("air"))) {
					itemstack.damageItem(1);
					
					world.setBlock(blockPos.east(), hiddenRedstoneSource);
				} else if(!(itemstack.getDamage() >= itemstack.getMaxDamage()) && world.getBlock(blockPos.south()).is(Blocks.get("air"))) {
					itemstack.damageItem(1);
					
					world.setBlock(blockPos.south(), hiddenRedstoneSource);
				} else if(!(itemstack.getDamage() >= itemstack.getMaxDamage()) && world.getBlock(blockPos.west()).is(Blocks.get("air"))) {
					itemstack.damageItem(1);
					
					world.setBlock(blockPos.west(), hiddenRedstoneSource);
				}
				
				return itemstack;
			}
		}).setCreativeTab(CreativeTabs.REDSTONE).setMaxDamage(32);
		
		ItemRegistry.registerItem(redstoneStriker, "redstoneStriker");
		LanguageRegistry.addItemEntry("en_US", "redstoneStriker", "Redstone Striker");
		
		var redstoneStrikerRecipe = new CraftingRecipe(["   ", "RF ", "GR "], {
			"R" : Items.get("redstone"),
			"F" : Items.get("flint"),
			"G" : Items.get("gold_ingot")
		});
		CraftRegistry.registerRecipe(new ItemStack(redstoneStriker), redstoneStrikerRecipe);
	}
});

ModRegistry.registerMod(redstoneStriker);