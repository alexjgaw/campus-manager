var _ = require('underscore');

module.exports = {
  scoreColor: function(score) {
    if (score >= 70 && score < 85) {
      return '#f0ad4e';
    }
    if (score >= 85 && score < 100) {
      return '#5cb85c';
    }
    if (score === 100) {
      return '#337ab7';
    }
    return '#d9534f';
  },

  bsStyle(score) {
    if (score >= 70 && score < 85) {
      return 'warning';
    }
    if (score >= 85 && score < 100) {
      return 'success';
    }
    if (score === 100) {
      return 'primary';
    }
    return 'danger';
  },

  weightedGradeAverage: function(checkpointGrades, dailyGrades) {
    var dailyAverage;
    var dailyLength = dailyGrades.length;
    if (dailyLength) {
      dailyAverage = _.reduce(dailyGrades, function(memo, dailyLength) { return memo + dailyLength; }) / dailyLength;
    }

    var checkpointAverage;
    var checkpointLength = checkpointGrades.length;
    if (checkpointLength) {
      checkpointAverage = _.reduce(checkpointGrades, function(memo, checkpointLength) { return memo + checkpointLength; }) / checkpointLength;
    }

    if (!checkpointAverage && !dailyAverage){
      return 0;
    } else if (!_.isNumber(checkpointAverage)) {
      return Math.round(dailyAverage);
    } else if (!_.isNumber(dailyAverage)) {
      return Math.round(checkpointAverage);
    } else {
      return Math.round(dailyAverage * .3 + checkpointAverage * .7);
    }
  },

  urlParse: function(url) {
    var parser = document.createElement('a');
    parser.href = url;
    return parser;
  }
}
