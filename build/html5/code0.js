gdjs.IntroCode = {};
gdjs.IntroCode.GDActualGametimeObjects1= [];
gdjs.IntroCode.GDActualGametimeObjects2= [];
gdjs.IntroCode.GDCoffeeInstrusctionsObjects1= [];
gdjs.IntroCode.GDCoffeeInstrusctionsObjects2= [];
gdjs.IntroCode.GDComputerOKObjects1= [];
gdjs.IntroCode.GDComputerOKObjects2= [];
gdjs.IntroCode.GDInstructionsObjects1= [];
gdjs.IntroCode.GDInstructionsObjects2= [];
gdjs.IntroCode.GDPressToStartObjects1= [];
gdjs.IntroCode.GDPressToStartObjects2= [];
gdjs.IntroCode.GDIntroWindowObjects1= [];
gdjs.IntroCode.GDIntroWindowObjects2= [];
gdjs.IntroCode.GDfire_95exObjects1= [];
gdjs.IntroCode.GDfire_95exObjects2= [];
gdjs.IntroCode.GDdiskObjects1= [];
gdjs.IntroCode.GDdiskObjects2= [];
gdjs.IntroCode.GDcomputerObjects1= [];
gdjs.IntroCode.GDcomputerObjects2= [];
gdjs.IntroCode.GDinternetObjects1= [];
gdjs.IntroCode.GDinternetObjects2= [];
gdjs.IntroCode.GDcoffeeObjects1= [];
gdjs.IntroCode.GDcoffeeObjects2= [];
gdjs.IntroCode.GDExclamationObjects1= [];
gdjs.IntroCode.GDExclamationObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};


gdjs.IntroCode.eventsList0xb4be0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.IntroCode.GDActualGametimeObjects1.createFrom(runtimeScene.getObjects("ActualGametime"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer_intro");
}{for(var i = 0, len = gdjs.IntroCode.GDActualGametimeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDActualGametimeObjects1[i].setString("* The actual game time is " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + " seconds");
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timer_intro");
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Level").setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


}; //End of gdjs.IntroCode.eventsList0xb4be0


gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDActualGametimeObjects1.length = 0;
gdjs.IntroCode.GDActualGametimeObjects2.length = 0;
gdjs.IntroCode.GDCoffeeInstrusctionsObjects1.length = 0;
gdjs.IntroCode.GDCoffeeInstrusctionsObjects2.length = 0;
gdjs.IntroCode.GDComputerOKObjects1.length = 0;
gdjs.IntroCode.GDComputerOKObjects2.length = 0;
gdjs.IntroCode.GDInstructionsObjects1.length = 0;
gdjs.IntroCode.GDInstructionsObjects2.length = 0;
gdjs.IntroCode.GDPressToStartObjects1.length = 0;
gdjs.IntroCode.GDPressToStartObjects2.length = 0;
gdjs.IntroCode.GDIntroWindowObjects1.length = 0;
gdjs.IntroCode.GDIntroWindowObjects2.length = 0;
gdjs.IntroCode.GDfire_95exObjects1.length = 0;
gdjs.IntroCode.GDfire_95exObjects2.length = 0;
gdjs.IntroCode.GDdiskObjects1.length = 0;
gdjs.IntroCode.GDdiskObjects2.length = 0;
gdjs.IntroCode.GDcomputerObjects1.length = 0;
gdjs.IntroCode.GDcomputerObjects2.length = 0;
gdjs.IntroCode.GDinternetObjects1.length = 0;
gdjs.IntroCode.GDinternetObjects2.length = 0;
gdjs.IntroCode.GDcoffeeObjects1.length = 0;
gdjs.IntroCode.GDcoffeeObjects2.length = 0;
gdjs.IntroCode.GDExclamationObjects1.length = 0;
gdjs.IntroCode.GDExclamationObjects2.length = 0;

gdjs.IntroCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['IntroCode'] = gdjs.IntroCode;
