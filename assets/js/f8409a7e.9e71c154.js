"use strict";(self.webpackChunkquad_docs=self.webpackChunkquad_docs||[]).push([[903],{4304:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var i=s(4848),l=s(8453),t=s(3554),d=s.n(t);const c={sidebar_position:1},o="Welcome to Quad",a={id:"intro",title:"Welcome to Quad",description:"What is a Quad?",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/quad-docs/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial Intro",permalink:"/quad-docs/docs/intro copy"}},r={},h=[{value:"What is a Quad?",id:"what-is-a-quad",level:2},{value:"How to edit Tags",id:"how-to-edit-tags",level:2},{value:"More Advanced",id:"more-advanced",level:3},{value:"List of Tags",id:"list-of-tags",level:2},{value:"Block Tags",id:"block-tags",level:3},{value:"Item Tags",id:"item-tags",level:3},{value:"Enchantment Tags",id:"enchantment-tags",level:3}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"welcome-to-quad",children:"Welcome to Quad"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/LieOnLion/LieOnLion/main/images/strip/lol.png",alt:""})}),"\n",(0,i.jsx)(n.h2,{id:"what-is-a-quad",children:"What is a Quad?"}),"\n",(0,i.jsx)(n.p,{children:"Quad is a mod that adds functional tags for items, blocks and enchantments to Minecraft."}),"\n",(0,i.jsx)(n.p,{children:"These tags range from what blocks make Cats want to sit on, to what enchantments protect you from burning on Magma Blocks, to even adding Ender Masks."}),"\n",(0,i.jsxs)(n.p,{children:["You can see the full list of tags here: ",(0,i.jsx)(n.a,{href:"/docs/intro#list-of-tags",children:"#List of Tags"})]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-edit-tags",children:"How to edit Tags"}),"\n",(0,i.jsx)(n.p,{children:"To add any kind of item, block or enchantment to their respective tags, you first need a Datapack."}),"\n",(0,i.jsxs)(n.p,{children:["There are a multitude of tutorials you can watch, but I recommend this one by ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/@Legitimoose",children:"Legitimoose"}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"Don't need Mc Functions",type:"danger",children:(0,i.jsx)(n.p,{children:"Stop as he starts making mc-functions, we will not be using them.\nAnd we don't need the mc-functions extention"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(d(),{controls:!0,url:"https://www.youtube.com/embed/ac6V5-KT6Rg?si=qTIiymW8mqQJOafZ"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:['All Quad tags are under the "name space" of ',(0,i.jsx)(n.code,{children:"quad:"}),". Create a folder called ",(0,i.jsx)(n.code,{children:"tags"}),", making a path of ",(0,i.jsx)(n.code,{children:"data/quad/tags/"}),". In the ",(0,i.jsx)(n.code,{children:"tags"})," folder you can create the respective folders for what you wish to add."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For block tags create a folder called ",(0,i.jsx)(n.code,{children:"blocks"})]}),"\n",(0,i.jsxs)(n.li,{children:["For item tags create a folder called ",(0,i.jsx)(n.code,{children:"items"})]}),"\n",(0,i.jsxs)(n.li,{children:["For enchantment tags create a folder called ",(0,i.jsx)(n.code,{children:"enchantment"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When you see a ",(0,i.jsx)(n.code,{children:"/"})," slash in a path, it means its a new folder, tag files will only contain letters, numbers or ",(0,i.jsx)(n.code,{children:"_"})," underscores, and anything before a ",(0,i.jsx)(n.code,{children:":"}),' colon would be the "name space" (e.g. ',(0,i.jsx)(n.code,{children:"quad:<tag_path>"}),")"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",metastring:'title=" example_tag.json"',children:'{\n  "replace": false,\n  "values": [\n    "minecraft:example_item_1",\n    "minecraft:example_item_2"\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Here is an ",(0,i.jsx)(n.code,{children:"example_tag"}),". Make it as any tag listed below, making sure it has the correct path. When in the correct path, create a new file, name it the tag you wish and end it with ",(0,i.jsx)(n.code,{children:".json"}),". This is important."]}),"\n",(0,i.jsxs)(n.p,{children:["Hover over the ",(0,i.jsx)(n.code,{children:"example_tag"})," code and you should see a copy button, paste it into the new file."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"minecraft:"}),' is the "name space" or "mod id", and ',(0,i.jsx)(n.code,{children:"example_item"}),' is the "item id". For items and blocks you can see the "name space" and "item id" in the inventory with ',(0,i.jsx)(n.code,{children:"advanced tooltips"}),' (shown with f3 + h).\nFor enchantments, the "item id" is (usually) the name, e.g. ',(0,i.jsx)(n.code,{children:"minecraft:fire_aspect"}),". Each new ",(0,i.jsx)(n.code,{children:"value"})," needs to be seperated with a ",(0,i.jsx)(n.code,{children:","})," comma, with the last value ending without one."]}),"\n",(0,i.jsx)(n.h3,{id:"more-advanced",children:"More Advanced"}),"\n",(0,i.jsxs)(n.p,{children:["Remove the line ",(0,i.jsx)(n.code,{children:'"replace": false,'})," to remove any other mods/datapacks adding items to the tag, only items in your file will be applied."]}),"\n",(0,i.jsxs)(n.p,{children:["Adding items in other tags can be done by putting a ",(0,i.jsx)(n.code,{children:"#"}),' hashtag before the "name space", e.g. ',(0,i.jsx)(n.code,{children:"#minecraft:planks"}),". However, usually you would want to add a little extra safty with adding other tags."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",metastring:'title=" example_tag_2.json"',children:'{\n  "replace": false,\n  "values": [\n    {\n      "id": "#minecraft:example_tag",\n      "required": false\n    },\n    "minecraft:example_item_3",\n    "minecraft:example_item_4"\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["With this, ",(0,i.jsx)(n.code,{children:"example_item"})," from ",(0,i.jsx)(n.code,{children:"1-4"})," will have the tag, ",(0,i.jsx)(n.code,{children:"1-2"})," loaded from the first ",(0,i.jsx)(n.code,{children:"example_tag"}),". If for any reason ",(0,i.jsx)(n.code,{children:"example_tag"})," doesn't exist or has an error, ",(0,i.jsx)(n.code,{children:"example_item"}),", ",(0,i.jsx)(n.code,{children:"3"})," and ",(0,i.jsx)(n.code,{children:"4"})," will still be loaded into the tag and ",(0,i.jsx)(n.code,{children:"example_tag"})," will be ignored."]}),"\n",(0,i.jsx)(n.h2,{id:"list-of-tags",children:"List of Tags"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/LieOnLion/LieOnLion/main/images/strip/lol.png",alt:""})}),"\n",(0,i.jsx)(n.h3,{id:"block-tags",children:"Block Tags"}),"\n",(0,i.jsxs)(n.p,{children:["located in ",(0,i.jsx)(n.code,{children:"data/quad/tags/blocks"})," (.json files)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cats_on_blocks/sit"})," blocks will cause cats to want to sit on them"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cats_on_blocks/lie"})," blocks will cause cats to want to lay down on them"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:""}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"when_stepped_on/burns"})," burns the player like Magma Blocks"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"when_stepped_on/slows"})," slows the player like Soul Sand"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"when_stepped_on/sticks"})," prevents the player from jumping as high like Honey Blocks"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"item-tags",children:"Item Tags"}),"\n",(0,i.jsxs)(n.p,{children:["located in ",(0,i.jsx)(n.code,{children:"data/quad/tags/items"})," (.json files)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"immune/all"})," be added to all ",(0,i.jsx)(n.code,{children:"immune/*"})," tags"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"immune/cactus"})," items won't get destroyed by cacti"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"immune/explosion"})," items won't get destroyed by explosions"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"immune/fire"})," items won't get destroyed by fire/lava"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"immune/lightning"})," items won't get destroyed by lightning"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"-1"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"never_despawn"})," items won't ever despawn"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"no_gravity"})," items will have no gravity"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"-2"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"snow/acts_solid"})," items won't sink in powdered snow"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"snow/boots"})," items when worn on feet will prevent wearer from sinking in powdered snow"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"-3"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"iron_golem_heal"})," items will heal Iron Golems when right clicked"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ender_mask"})," items will prevent Enderman getting hostile when looked at"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"piglin_armour"})," items will prevent Piglins getting hostile"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fire_lighter"})," items will ignite TNT, Campfires, Candles and Creepers when right clicked"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"respawn_anchor_charger"})," items will charge up Respawn Anchors"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"protects_from/burns"})," items will protects the player from burning on blocks like Magma or Campfire Blocks\n(or blocks in ",(0,i.jsx)(n.code,{children:"when_stepped_on/burns"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"-4"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fuel/lava"})," items will burn as fuel for 20,000 ticks (1,000 seconds)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fuel/coal_block"})," items will burn as fuel for 16,000 ticks (800 seconds)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fuel/dried_kelp_block"})," items will burn as fuel for 4001 ticks (200.05 seconds)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fuel/blaze_rod"})," items will burn as fuel for 2400 ticks (120 seconds)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fuel/coal"})," items will burn as fuel for 1600 ticks (80 seconds)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fuel/boat"})," items will burn as fuel for 1200 ticks (60 seconds)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fuel/hanging_sign"})," items will burn as fuel for 800 ticks (40 seconds)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fuel/wood"})," is the new name of items will burn as fuel for 300 ticks (15 seconds)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fuel/wood_tool"})," items will burn as fuel for 200 ticks (10 seconds)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fuel/wood_slab"})," items will burn as fuel for 150 ticks (7.5 seconds)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fuel/wool"})," items will burn as fuel for 100 ticks (5 seconds)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fuel/carpet"})," items will burn as fuel for 67 ticks (3.35 seconds)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fuel/bamboo"})," items will burn as fuel for 50 ticks (2.5 seconds)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"enchantment-tags",children:"Enchantment Tags"}),"\n",(0,i.jsxs)(n.p,{children:["located in ",(0,i.jsx)(n.code,{children:"data/quad/tags/enchantment"})," (.json files)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fire_lighter"})," enchanted items will ignite TNT, Campfires, Candles and Creepers when right clicked"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pacifier/enderman"})," enchanted items keeps enderman from getting aggressive when looked at"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pacifier/piglin"})," enchanted items keeps piglins from getting aggressive when preventable"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"protects_from/burns"})," enchanted items protects the player from burning on blocks like Magma or Campfire Blocks\n(or blocks in ",(0,i.jsx)(n.code,{children:"when_stepped_on/burns"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"snow/boots"})," enchanted items lets the player walk on powdered snow when worn"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);