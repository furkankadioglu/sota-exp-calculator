
angular.module('ExpCalculator', []);
angular.module('ExpCalculator').controller('CalculatorController', calculator);


function calculator($scope)
{
	// Requirements
	$scope.currentLevel = 88;
	$scope.targetLevel = 100;
	$scope.LevelExp = 1212424;
	$scope.LevelMultifier = 1.1;

	// Temporary Variables


	// Results
	this.levelDifference = this.targetLevel - this.currentLevel;
	this.Coefficient = Math.pow(this.LevelMultifier, this.levelDifference);
	this.currentExp = (this.LevelExp / this.Coefficient).toFixed(2);
	this.currentExpNeed = (this.LevelExp - this.currentExp).toFixed(2);
	this.currentGoalPercent = ((100* this.currentExp) / this.LevelExp).toFixed(2);


	$scope.calculate = function() {
		console.log("Okay!");
		this.levelDifference = this.targetLevel - this.currentLevel;
		this.Coefficient = (Math.pow(this.LevelMultifier, this.levelDifference)).toFixed(2);
		this.currentExp = (this.LevelExp / this.Coefficient).toFixed(2);
		this.currentExpNeed = (this.LevelExp - this.currentExp).toFixed(2);
		this.currentGoalPercent = ((100* this.currentExp) / this.LevelExp).toFixed(2);

		console.log("Current Level: " + this.currentLevel);
		console.log("Target Level: " + this.targetLevel);
		console.log("Level Exp: " + this.LevelExp);
		console.log("Level Exp: " + this.LevelMultifier);

	}
	
	$scope.calculate();


}

