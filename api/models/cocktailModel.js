'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//nimi, kuvanimi ja ohje pakko täytää, ainesosia ei
var CocktailSchema = new Schema({
  nimi: {
    type: String,
    required: 'Anna juoman nimi'
  },
    kuvanimi: {
    type: String,
    required: 'Anna kuvan nimi'
  },
    ohje: {
    type: String,
    required: 'Kerro ohje'
  },
  //huom. multidimensional array, postman: ainesosat[ainesosa1][mitä]... ainesosat[ainesosa ->1<- ][määrä]....
	ainesosat: [{
        ainesosa1: [{
			mitä: {
			type: String
			},			
			määrä: {
			type: Number
			},
			mitta: {
			type: String
			}
		 }],
		ainesosa2: [{
			mitä: {
			type: String
			},	
			määrä: {
			type: Number
			},
			mitta: {
			type: String
			}
		 }],
		 ainesosa3: [{
			mitä: {
			type: String
			},			
			määrä: {
			type: Number
			},
			mitta: {
			type: String
			}
		 }],
		ainesosa4: [{
			mitä: {
			type: String
			},			
			määrä: {
			type: Number
			},
			mitta: {
			type: String
			}
		 }],
		ainesosa5: [{
			mitä: {
			type: String
			},	
			määrä: {
			type: Number
			},
			mitta: {
			type: String
			}
		 }],
		ainesosa6: [{
			mitä: {
			type: String
			},	
			määrä: {
			type: Number
			},
			mitta: {
			type: String
			}
		 }],
		ainesosa7: [{
			mitä: {
			type: String
			},	
			määrä: {
			type: Number
			},
			mitta: {
			type: String
			}
		 }],
		ainesosa8: [{
			mitä: {
			type: String
			},	
			määrä: {
			type: Number
			},
			mitta: {
			type: String
			}
		 }],
		ainesosa9: [{
			mitä: {
			type: String
			},	
			määrä: {
			type: Number
			},
			mitta: {
			type: String
			}
		 }],
		ainesosa10: [{
			mitä: {
			type: String
			},	
			määrä: {
			type: Number
			},
			mitta: {
			type: String
			}
		 }]
      }]
});

module.exports = mongoose.model('Cocktails', CocktailSchema);