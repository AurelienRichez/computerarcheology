{
	
	"content_root" : "content/",
	"deploy_root"  : "deploy/",
	
	"entries": [
		 {"mark": "index.mark",   "out": "index.html"},	     
	     {"copy": "Arch.jpg"},	     	
	     
	     {"copyDir": "js"},
	     {"copyDir": "css"},
	     {"copyDir": "img"},
	     
	     {"dir": "Help", "entries": [
             {"copy": "Help.jpg"},
             {"copy": "HelpExample1.jpg"},
             {"copy": "HelpExample2.jpg"},
             {"copy": "HelpExample3.jpg"},
             {"copy": "HelpExample4.jpg"},
             {"mark": "Help.mark", "out": "index.html"}
	    	 ]	    	 
	     },
	     
	     {"dir": "Contact",  "entries": [
	         {"copy": "Contact.jpg"},
	    	 {"mark": "Contact.mark", "out": "index.html"}
	    	 ]	    	 
	     },
	     
	     	     	     	     
	     {"dir": "Amiga", "nav": "Amiga", "entries": [
	    	 {"mark": "Amiga.mark", "out": "index.html"},
	    	 {"copy": "Amiga.jpg"},
	    	 {"dir": "Rainbow", "nav": "Rainbow Islands", "entries": [
	    	     {"copy": "Rainbow.jpg"},
	    	     {"mark": "Rainbow.mark", "out": "index.html"},
	    	     {"mark": "1loader_dec.mark", "out": "1loader_dec.html", "nav": "1loader_dec"},
	    	     {"mark": "1loader.mark", "out": "1loader.html", "nav": "1loader"},
	    	     {"mark": "boot.mark", "out": "boot.html", "nav": "boot"},
	    	     {"mark": "orig_boot.mark", "out": "orig_boot.html", "nav": "orig_boot"}
	    	     ]
	    	 }
	    	 ]
	     },
	     
	     {"dir": "Arcade", "nav": "Arcade", "entries": [
	         {"mark": "Arcade.mark", "out": "index.html"},
	         {"copy": "Arcade.jpg"},
	         {"dir": "Asteroids", "nav": "Asteroids", "entries": [
	             {"mark": "Asteroids.mark", "out": "index.html"},
	             {"address": "RAMUse.mark", "out": "RAMUse.html", "nav": "RAM Use"},
	             {"address": "Hardware.mark", "out": "Hardware.html", "nav": "Hardware"},
	             {"code": "Code.cmark", "out": "Code.html", "nav": "Code"},
	             {"mark": "DVG.mark", "out": "DVG.html", "nav": "DVG"},
	             {"code": "VectorROM.cmark", "out": "VectorROM.html", "nav": "Vector ROM"},
	             {"copy": "DVG.jpg"},
	             {"copy": "Asteroids.jpg"}
	             ]
	         },
	         {"dir": "Defender", "nav": "Defender", "entries": [	         
	             {"mark": "Defender.mark", "out": "index.html"},
	             
	             {"address": "RAMUse.mark", "out": "RAMUse.html", "nav": "RAM Use"},
	             {"address": "Hardware.mark", "out": "Hardware.html", "nav": "Hardware"},
	             {"mark": "Bank1.cmark", "out": "Bank1.html", "nav":"Bank 1"},
	             {"mark": "Bank2.cmark", "out": "Bank2.html", "nav":"Bank 2"},
	             {"mark": "Bank3.cmark", "out": "Bank3.html", "nav":"Bank 3"},
	             {"mark": "Bank7.cmark", "out": "Bank7.html", "nav":"Bank 7"},
	             {"mark": "BankFixed.cmark", "out": "BankFixed.html", "nav":"Fixed Bank"},	             
	             
	             {"mark": "SoundCode.cmark", "out": "SoundCode.html", "nav":"Sound Code"},
	             {"address": "SoundRAMUse.mark", "out": "SoundRAMUse.html", "nav": "Sound RAM Use"},
	             {"address": "SoundHardware.mark", "out": "SoundHardware.html", "nav": "Sound Hardware"},
	             
	             {"copy": "Defender-Theory-Early.pdf"},
	             {"copy": "Defender-Theory-Later.pdf"},
	             {"copy": "Defender.ROM.B&W.jpg"},
	             {"copy": "Defender.CPU.jpg"},
	             {"copy": "Defender.Vid.B&W.jpg"},
	             {"copy": "Defender.jpg"}
	             ]
	         },
	         {"dir": "Frogger", "nav": "Frogger", "entries": [
	             {"mark": "Frogger.mark", "out": "index.html"},
	             {"address": "RAMUse.mark", "out": "RAMUse.html", "nav": "RAM Use"},
	             {"code": "SoundCode.cmark", "out": "SoundCode.html", "nav": "Sound Code"},
	             {"copy": "Frogger.jpg"},
	             {"copy": "FroggerFix.mp3"}
	             ]
	         },
	         {"dir": "Galaga", "nav": "Galaga", "entries": [
                 {"mark": "Galaga.mark", "out": "index.html"},
                 {"code": "CPU1.cmark", "out":"CPU1.html","nav":"CPU1"},
                 {"code": "CPU2.cmark", "out":"CPU2.html","nav":"CPU2"},
                 {"code": "CPU3.cmark", "out":"CPU3.html","nav":"CPU3"},
                 {"copy": "Galaga.jpg"},
                 {"copy": "galaga1.jpg"},
                 {"copy": "galaga2.jpg"}
	             ]
	         },
	         
	         {"dir": "MoonPatrol", "nav": "Moon Patrol", "entries": [
                 {"copy": "MoonPatrol.jpg"},
	             
	             {"mark": "MoonPatrol.mark", "out": "index.html"},
	             {"address": "RAMUse.mark", "out": "RAMUse.html", "nav": "RAM Use"},
	             {"address": "Hardware.mark", "out": "Hardware.html", "nav": "Hardware"},
	             {"code": "Code.cmark", "out": "Code.html", "nav": "Code"},
	             
	             {"mark": "MoonPatrolSound.mark", "out": "MoonPatrolSound.html"},
	             {"address": "SoundRAMUse.mark", "out": "SoundRAMUse.html", "nav": "Sound RAM Use"},
	             {"address": "SoundHardware.mark", "out": "SoundHardware.html", "nav": "Sound Hardware"},
	             {"code": "SoundCode.cmark", "out": "SoundCode.html", "nav": "Sound Code"},
	             
	             {"code": "GFX1.cmark", "out": "GFX1.html", "nav": "GFX1"},
	             {"code": "GFX2.cmark", "out": "GFX2.html", "nav": "GFX2"},
	             {"code": "GFX3.cmark", "out": "GFX3.html", "nav": "GFX3"},
	             {"code": "GFX4.cmark", "out": "GFX4.html", "nav": "GFX4"},
	             {"code": "GFX5.cmark", "out": "GFX5.html", "nav": "GFX5"},	             
	             {"code": "ImageBackgroundColors.cmark", "out": "ImageBackgroundColors.html", "nav": "Background Colors"},
	             {"code": "SpriteColors.cmark", "out": "SpriteColors.html", "nav": "Sprite Colors"},
	             {"code": "SpriteColorSets.cmark", "out": "SpriteColorSets.html", "nav": "Sprite Color Sets"},
	             {"code": "TextColors.cmark", "out": "TextColors.html", "nav": "Text Colors"}
	             ]
	         },
	         
	         {"dir": "OmegaRace", "nav": "Omega Race", "entries": [
                 {"address": "MainRAMUse.mark", "out": "MainRAMUse.html", "nav": "RAM Use (Main)"},
                 {"address": "SoundRAMUse.mark", "out": "SoundRAMUse.html", "nav": "RAM Use (Sound)"},
	             {"mark": "OmegaRace.mark", "out":"index.html"},
	             {"code": "VectorROM.cmark", "out":"VectorROM.html", "nav": "Vector ROM"},
	             {"code": "MainBoard.cmark", "out":"MainBoard.html", "nav": "Main Board"},
	             {"code": "SoundBoard.cmark", "out":"SoundBoard.html", "nav": "Sound Board"},	             
	             {"copy": "ORace.jpg"}
	             ]
	         },
	         
	         {"dir": "Robotron", "nav": "Robotron", "entries": [
	             {"mark": "Robotron.mark", "out": "index.html"},
	             {"copy": "Robotron.jpg"},
	             {"code": "SoundCode.cmark", "out": "SoundCode.html", "nav": "Sound Code"}	                                                            
	             ]
	         },
	         
	         {"dir": "SpaceInvaders", "nav": "Space Invaders", "entries": [
	             {"mark": "SpaceInvaders.mark", "out": "index.html"},
	             {"copy": "SpaceInvaders.jpg"},
	             {"address": "RAMUse.mark", "out": "RAMUse.html", "nav": "RAM Use"},
	             {"address": "Hardware.mark", "out": "Hardware.html", "nav": "Hardware Info"},
	             {"code": "Code.cmark", "out": "Code.html", "nav": "Code"},
	             
	             {"mark": "Chronology.mark", "out": "Chronology.html", "nav": "Chronology"},
	             
	             {"copy": "Alive.jpg"},
	             {"copy": "Check23.jpg"},
	             {"copy": "Chronology.jpg"},
	             {"copy": "Diag.jpg"},
	             {"copy": "DiagRun.jpg"},
	             {"copy": "Flip.jpg"},
	             {"copy": "NoTAITO.jpg"},
	             {"copy": "SideCheck.jpg"}
	             ]
	         },
	         
	         {"dir": "TimePilot", "nav": "Time Pilot", "entries": [
	             {"copy": "TimePilot.jpg"},
	             {"mark": "TimePilot.mark", "out": "index.html"},
	             {"code": "SoundCode.cmark", "out": "SoundCode.html", "nav": "Sound Code"}
	             ]
	         }
	         	         
	         ]
	     },
	     
	     {"dir": "Atari2600", "nav": "Atari 2600", "entries": [
	         {"mark": "Atari2600.mark", "out": "index.html"},
	         {"copy": "Atari2600.jpg"},
	         {"copy": "Hardware.jpg"},
	         {"mark": "Stella.mark", "out": "Stella.html", "nav": "Stella"},
	         
	         {"dir": "Asteroids", "nav": "Asteroids", "entries": [
	             {"copy": "A2600Asteroids.jpg"},
	             {"mark": "Asteroids.mark", "out": "index.html"},
	             {"code": "Code.cmark", "out": "Code.html", "nav": "Code"}
	             ]
	         },
	         
	         {"dir": "BattleZone", "nav": "BattleZone", "entries": [
	             {"copy": "A2600Battlezone.jpg"},
	             {"mark": "BattleZone.mark", "out": "index.html"},
	             {"code": "Code.cmark", "out": "Code.html", "nav": "Code"}
	             ]
	         },
	         
	         {"dir": "Chess", "nav": "Chess", "entries": [
	             {"copy": "A2600Chess.jpg"},
	             {"mark": "Chess.mark", "out": "index.html"},
	             {"code": "Code.cmark", "out": "Code.html", "nav": "Code"}
	             ]
	         },
	         
	         {"dir": "Combat", "nav": "Combat", "entries": [
	             {"copy": "A2600Combat.jpg"},
	             {"mark": "Combat.mark", "out": "index.html"},
	             {"code": "Code.cmark", "out": "Code.html", "nav": "Code"}
	             ]
	         },
	         
	         {"dir": "DoubleGap", "nav": "Double Gap", "entries": [
	             {"copy": "DoubleGap.jpg"},
	             {"mark": "DoubleGap.mark", "out": "index.html"},
	             {"mark": "Code.mark", "out": "Code.html", "nav": "Code"}
	             ]
	         },
	         
	         {"dir": "ET", "nav": "ET", "entries": [
	             {"copy": "A2600ET.jpg"},
	             {"mark": "ET.mark", "out": "index.html"},
	             {"code": "Code.cmark", "out": "Code.html", "nav": "Code"}
	             ]
	         },
	         
	         {"dir": "MissileCommand", "nav": "Missile Command", "entries": [
	             {"copy": "A2600MissileCommand.jpg"},
	             {"mark": "MissileCommand.mark", "out": "index.html"},
	             {"code": "Code.cmark", "out": "Code.html", "nav": "Code"}
	             ]
	         }
	         
	         ]
	     },
	     
	     {"dir": "CoCo", "nav": "CoCo", "entries": [
             {"mark": "CoCo.mark", "out": "index.html"},
             {"address": "Hardware.mark", "out": "Hardware.html", "nav":"Hardware"},
             {"copy": "PIA0.jpg"},
             {"copy": "PIA1.jpg"},
             {"copy": "SAM.jpg"},
             {"copy": "color-basic-unravelled.pdf"},
             {"copy": "disk-basic-unravelled.pdf"},
             {"copy": "extended-basic-unravelled.pdf"},
             {"copy": "super-extended-basic-unravelled.pdf"},
             {"copy": "CoCo.jpg"},
             {"copy": "CoCoTech.jpg"},
             {"dir": "EarlyWork", "nav": "My Early Work", "leaf":true, "entries": [
                 {"mark": "EarlyWork.mark", "out": "index.html"},
                 {"copy": "CoverTRS80News.jpg"},
                 {"copy": "BullsEye1.jpg"},
                 {"copy": "BullsEye2.jpg"},
                 {"copy": "Cover80Micro.jpg"},
                 {"copy": "Animal1.jpg"},
                 {"copy": "Animal2.jpg"},
                 {"copy": "Animal3.jpg"},
                 {"copy": "DOS1.jpg"},
                 {"copy": "DOS2.jpg"}
                 ]
             },
             {"dir": "MadnessMinotaur", "nav": "Madness & Minotaur", "entries": [
                 {"mark": "Madness.mark", "out": "index.html"},
                 {"address": "RAMUse.mark", "out": "RAMUse.html", "nav": "RAM Use"},
                 {"code": "Code.cmark", "out": "Code.html", "nav": "Code"},
                 {"copy": "Madness.jpg"},
                 {"copy": "madness.inf"},
                 {"copy": "MadGameLoop.inf"},
                 {"copy": "MadRooms.inf"},
                 {"copy": "MadRoomActions.inf"},
                 {"copy": "MadPassages.inf"},
                 {"copy": "MadItems.inf"},
                 {"copy": "MadSpells.inf"},
                 {"copy": "MadBlocks.inf"},
                 {"copy": "MadBanner.inf"},
                 {"copy": "MadDebug.inf"},
                 {"copy": "Madness.z5"},
                 {"copy": "inst.cas"},
                 {"copy": "s_one.cas"},
                 {"copy": "s_two.cas"},
                 {"copy": "s_three.cas"},
                 {"copy": "s_four.cas"},
                 {"copy": "s_five.cas"},
                 {"copy": "s_six.cas"},
                 {"copy": "s_seven.cas"}
                 ]
             },
             {"dir": "Pyramid", "nav": "Pyramid", "entries": [
             	 {"mark": "Pyramid.mark", "out": "index.html"},
                 {"address": "RAMUse.mark", "out": "RAMUse.html", "nav":"RAM Use"},
                 {"code": "Code.cmark", "out": "Code.html", "nav": "Code"},
                 {"copy": "Pyramid.jpg"},
                 {"copy": "DEFAULT.js"},
                 {"copy": "GAME.js"},
                 {"copy": "MAIN.js"},
                 {"copy": "OBJS.js"},
                 {"copy": "PARSE.js"},
                 {"copy": "ROOMS.js"},
                 {"copy": "SCRIPTER.js"}
                 ]
             }, 
             {"dir": "RaakaTu", "nav": "Raaka Tu", "entries" : [
			     {"mark": "RaakaTu.mark", "out": "index.html"},
				 {"address": "RAMUse.mark", "out": "RAMUse.html", "nav":"RAM Use"},
				 {"code": "Code.cmark", "out": "Code.html", "nav": "Code"},
				 {"copy": "RaakaTu.jpg"}
                 ]
             },
             {"dir": "Bedlam", "nav": "Bedlam", "entries" : [
                 {"mark": "Bedlam.mark", "out": "index.html"},
                 {"address": "RAMUse.mark", "out": "RAMUse.html", "nav":"RAM Use"},
                 {"code": "Code.cmark", "out": "Code.html", "nav": "Code"},
                 {"copy": "Bedlam.jpg"}
                 ]
             },
             {"dir": "Daggorath", "nav": "Daggorath", "entries" : [
				 {"mark": "Daggorath.mark", "out": "index.html"},
				 {"address": "RAMUse.mark", "out": "RAMUse.html", "nav":"RAM Use"},
				 {"code": "Code.cmark", "out": "Code.html", "nav": "Code"},
				 {"copy": "Daggorath.jpg"}
                 ]
             }
	    	 ]	    	 
	     },
	     
	     {"dir": "People",  "nav": "People", "entries": [	         
	         {"mark": "People.mark", "out": "index.html"},
	         {"mark": "ChrisCantrell.mark", "out": "ChrisCantrell.html", "nav": "Chris Cantrell"},
	         {"mark": "HarryHurst.mark", "out": "HarryHurst.html", "nav": "Harry Hurst"},
	         {"mark": "PatrikSevallius.mark", "out": "PatrikSevallius.html", "nav": "Patrik Sevallius"}
	         ]	    	 
	     },
	     
	     {"dir": "NES", "nav": "Nintendo NES", "entries": [
	         {"mark": "NES.mark", "out": "index.html"},
	         {"copy": "NES.jpg"},
	                                              	         
	         {"dir": "Zelda", "nav": "Zelda", "entries": [
	             {"copy": "Zelda.jpg"},
	             {"copy": "ZeldaBanks.jpg"},
	             {"mark": "Zelda.mark", "out": "index.html"},
	             {"address": "RAMUse.mark", "out": "RAMUse.html", "nav": "RAM Use"},
	             {"address": "Hardware.mark", "out": "Hardware.html", "nav": "Hardware Info"},
	             {"code": "Bank0.cmark", "out": "Bank0.html", "nav": "Bank0"},
	             {"code": "Bank1.cmark", "out": "Bank1.html", "nav": "Bank1"},
	             {"code": "Bank2.cmark", "out": "Bank2.html", "nav": "Bank2"},
	             {"code": "Bank3.cmark", "out": "Bank3.html", "nav": "Bank3"},
	             {"code": "Bank4.cmark", "out": "Bank4.html", "nav": "Bank4"},
	             {"code": "Bank5.cmark", "out": "Bank5.html", "nav": "Bank5"},
	             {"code": "Bank6.cmark", "out": "Bank6.html", "nav": "Bank6"},
	             {"code": "Bank7.cmark", "out": "Bank7.html", "nav": "Bank7"}
	             ]
	         }
	         ]
	     },
	     
	     {"dir": "Virus", "nav": "Viruses", "entries": [
	         {"mark": "Virus.mark", "out": "index.html"},
	         {"copy": "Virus.jpg"},
	                                          	                                              	         
	         {"dir": "MorrisWorm", "nav": "Morris Worm", "entries": [
	              {"copy": "Worm.jpg"},
	              {"copy": "wormvax.gif"},
	              {"mark": "Worm.mark", "out": "index.html"}
	              ]
	         },
	         
	         {"dir": "Stoned", "nav": "Stoned", "entries": [
	              {"copy": "Stoned.jpg"},
	              {"mark": "Stoned.mark", "out": "index.html"}
	              ]
	         }
	         ]
	     },
	     
	     {"dir": "Tools", "nav": "Tools", "entries": [
	         {"mark": "Tools.mark", "out": "index.html"},
	         {"copy": "Tools.jpg"},
	                                       	                                          	                                              	         
	         {"dir": "Blend", "nav": "Blend", "entries": [
	               {"copy": "Blend.jpg"},
	               {"copy": "blend.zip"},
	               {"copy": "Blend1.png"},
	               {"copy": "photo1.jpg"},
	               {"mark": "Blend.mark", "out": "index.html"}
	               ]
	         }
	         ]
	     }
	             
	 ]

}
