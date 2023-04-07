// services start with minecraft, when enabled and are meant to be persistent scripts.
const d3d = Hud.createDraw3D();
const rs = World.getWorldScanner()
    .withStringBlockFilter()
    .contains("chest", "barrel")
    .build()
    .scanChunkRange(Player.getPlayer().getChunkPos().x, Player.getPlayer().getChunkPos().y, 0)
    .map(v => v.toString())
    .map(v => v.split(", ").map(parseFloat).map(Math.floor))//.map(parseFloat)//.map(Math.floor);
    for(let [x, y, z] of rs) d3d.addBox(x, y, z, x+1, y+1, z+1, 0xFFFFFF, 0, false, false)
const ticklistener = JsMacros.on("Tick", JavaWrapper.methodToJava(() => {
    
    
}));


d3d.register();
// this fires when the service is stopped
event.stopListener = JavaWrapper.methodToJava(() => {
    d3d.unregister();
    JsMacros.off(ticklistener);
});
  
  
