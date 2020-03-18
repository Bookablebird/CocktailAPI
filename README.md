# CocktailAPI
Request & Response Examples

## GET /Cocktails

## GET /Cocktails/[id]

## POST /Cocktails

## PUT /Cocktails/[id]

## DELETE /Cocktails/[id]


## GET /Cocktails
Example: http://localhost:3000/Cocktails

Response body:

{
        "_id": "5e691bfec988e448883e18b2",
        "nimi": "Alien Brain Hemorrhage",
        "kuvanimi": "alienbrainhemorrhage.png",
        "ohje": "Kaada shottilasi n. puolilleen persikkalikööriä, minkä jälkeen varovasti baileys päälle. Jätä tilaa curacaolle ja grenadiilille. Kun kermalikööri on tasaantunut, lorauta curacao baileysin päälle ja lopuksi grenadiini keskelle shottilasia. Grenadiinin massan vuoksi aine putoaa pohjaan luoden tunnusomaisen effektinsä.",
        "ainesosat": [
            {
                "ainesosa1": [
                    {
                        "_id": "5e6a31a45fde2c3a1405a03e",
                        "mitä": "Persikkalikööri",
                        "määrä": 20,
                        "mitta": "ml"
                    }
                ],
                "ainesosa2": [
                    {
                        "_id": "5e6a31a45fde2c3a1405a03f",
                        "mitä": "Kermalikööri",
                        "määrä": 20,
                        "mitta": "ml"
                    }
                ],
                "ainesosa3": [
                    {
                        "_id": "5e6a31a45fde2c3a1405a040",
                        "mitä": "Curacaolikööri",
                        "määrä": 5,
                        "mitta": "ml"
                    }
                ],
                "ainesosa4": [
                    {
                        "_id": "5e6a31a45fde2c3a1405a041",
                        "mitä": "Grenadiini",
                        "määrä": 1,
                        "mitta": "Dash"
                    }
                ],
                "ainesosa5": [],
                "ainesosa6": [],
                "ainesosa7": [],
                "ainesosa8": [],
                "ainesosa9": [],
                "ainesosa10": [],
                "_id": "5e6a31a45fde2c3a1405a03d"
            }
        ],
        "__v": 0
    }
## GET /Cocktails/[id]
Example: http://localhost:3000/Cocktails/5e69393fc988e448883e18c4

Response body:

{
    "_id": "5e69393fc988e448883e18c4",
    "nimi": "Kuolema",
    "kuvanimi": "kuolema.png",
    "ohje": "Sekoita hyvin",
    "ainesosat": [
        {
            "ainesosa1": [
                {
                    "_id": "5e6a34a75fde2c3a1405a049",
                    "mitä": "Bratva",
                    "määrä": 1,
                    "mitta": "l"
                }
            ],
            "ainesosa2": [
                {
                    "_id": "5e6a34a75fde2c3a1405a04a",
                    "mitä": "Bacardi 151",
                    "määrä": 50,
                    "mitta": "cl"
                }
            ],
            "ainesosa3": [
                {
                    "_id": "5e6a34a75fde2c3a1405a04b",
                    "mitä": "Tequila",
                    "määrä": 400,
                    "mitta": "ml"
                }
            ],
            "ainesosa4": [
                {
                    "_id": "5e6a34a75fde2c3a1405a04c",
                    "mitä": "Absintti",
                    "määrä": 5,
                    "mitta": "Shottia"
                }
            ],
            "ainesosa5": [],
            "ainesosa6": [],
            "ainesosa7": [],
            "ainesosa8": [],
            "ainesosa9": [],
            "ainesosa10": [],
            "_id": "5e6a34a75fde2c3a1405a048"
        }
    ],
    "__v": 0
}
## POST /Cocktails/
Example: Create – POST http://localhost:3000/Cocktails/nimi=testi&kuvanimi=testi&ohje=testi&ainesosat[ainesosa1][mitä]=testi&ainesosat[ainesosa1][määrä]=100&ainesosat[ainesosa1][mitta]=ml

Request body:

{
        "_id": "5e691bfec988e448883e18c",
        "nimi": "testi",
        "kuvanimi": "testi",
        "ohje": "testi",
        "ainesosat": [
            {
                "ainesosa1": [
                    {
                        "_id": "5e6a31a45fde2c3a1405a01b",
                        "mitä": "testi",
                        "määrä": 100,
                        "mitta": "ml"
                    }
                ],
                "ainesosa2": [],
                "ainesosa3": [],
                "ainesosa4": [],
                "ainesosa5": [],
                "ainesosa6": [],
                "ainesosa7": [],
                "ainesosa8": [],
                "ainesosa9": [],
                "ainesosa10": [],
                "_id": "5e6a31a45fde2c3a1405a01a"
            }
        ],
        "__v": 0
    }
    
    ## PUT /Cocktails/[id]
    Example: http://localhost:3000/Cocktails/5e69393fc988e448883e18c4?nimi=testi1&ohje=Sekoita hyvin
    
    Request body:

{
        "_id": "5e691bfec988e448883e18c",
        "nimi": "testi1",
        "kuvanimi": "testi",
        "ohje": "Sekoita hyvin",
        "ainesosat": [
            {
                "ainesosa1": [
                    {
                        "_id": "5e6a31a45fde2c3a1405a01b",
                        "mitä": "testi",
                        "määrä": 100,
                        "mitta": "ml"
                    }
                ],
                "ainesosa2": [],
                "ainesosa3": [],
                "ainesosa4": [],
                "ainesosa5": [],
                "ainesosa6": [],
                "ainesosa7": [],
                "ainesosa8": [],
                "ainesosa9": [],
                "ainesosa10": [],
                "_id": "5e6a31a45fde2c3a1405a01a"
            }
        ],
        "__v": 0
    }
    
    ## DELETE /Cocktails/[id]
    
    Example: http://localhost:3000/Cocktails/5e69393fc988e448883e18c4
    
    Response body:

{
    "message": "Cocktail successfully deleted"
}
    

    
