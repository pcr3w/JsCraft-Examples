ModRegistry.registerMod(new Mod({
	name : "Useful Crafting",
	version : "1.0",
	author : "pcr3w",
	
	init : function() {
		// rotten flesh(1) -> leather(1)
		CraftRegistry.registerSmeltingRecipe(Items.get("rotten_flesh"), new ItemStack(Items.get("leather")), 2);
		
		// stick(1) + stone(1) -> arrows(3)
		CraftRegistry.registerRecipe(new ItemStack(Items.get("arrow"), 3), new CraftingRecipe([" S ", " W ", "   "], {
			"S" : Blocks.get("cobblestone"),
			"W" : Items.get("stick")
		}));
		
		// diamonds(4) + emerald(1) -> nether star(1)
		CraftRegistry.registerRecipe(new ItemStack(Items.get("nether_star")), new CraftingRecipe([" D ", "DED", " D "], {
			"D" : Items.get("diamond"),
			"E" : Items.get("emerald")
		}));
		
		// bonemeal(3) -> bone(1)
		CraftRegistry.registerShapelessRecipe(new ItemStack(Items.get("bone")), new CraftingRecipe([new ItemStack(Items.get("dye"), 1, 15), new ItemStack(Items.get("dye"), 1, 15), new ItemStack(Items.get("dye"), 1, 15)]));
		
		// leather(7) + iron(2) -> saddle(1)
		CraftRegistry.registerRecipe(new ItemStack(Items.get("saddle")), new CraftingRecipe(["LLL", "ILI", "LLL"], {
			"L" : Items.get("leather"),
			"I" : Items.get("iron_ingot")
		}));
		
		// blaze powder(1) + coal(1) -> gunpowder(3)
		CraftRegistry.registerShapelessRecipe(new ItemStack(Items.get("gunpowder"), 3), new CraftingRecipe([new ItemStack(Items.get("blaze_powder")), new ItemStack(Items.get("coal"))]));
		
	}
}));