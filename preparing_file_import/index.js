let filteredpurchasedCars =[
    {Type:22,IdNumber:21101, Model:'S1', Insured:true, YearBuilt:'1922'},
    {Type:'StockCar', IdNumber:'4654', Model:'S1', Insured:'True', YearBuilt:'2011'},
    {Type:'Refrigerator', IdNumber:'2072', Model:'T1', Insured:false, YearBuilt:'1975'},
    {Type:'Gondola', IdNumber:'8321', Model: 22, Insured:'False', YearBuilt:2002},
    {Type:48, IdNumber: 205, Model: 'G1', Insured:'true', YearBuilt:1968},
    {Type:'Lorrie', IdNumber:78, Model:'', Insured: false, YearBuilt:1961}
  ]
  
  let filteredfilteredPurchasedCars = filteredpurchasedCars.filter(e => typeof e.Type === 'string')
  console.log(filteredfilteredPurchasedCars)
  
  for (let i=0; i<filteredpurchasedCars.length; i++) {
    let getTypeDataType = typeof filteredpurchasedCars[i].Type
  
    if(getTypeDataType !=='string') {
      filteredpurchasedCars[i].type = String(filteredpurchasedCars[i].Type);
    }
  
    let getIdNumberDataType = typeof filteredpurchasedCars[i].IdNumber
  
    if(getIdNumberDataType !=='number') {
      filteredpurchasedCars[i].type = Number(filteredpurchasedCars[i].IdNumber);
    }
  
    let getModelDataType = typeof filteredpurchasedCars[i].Model
  
    if(getModelDataType !=='string') {
      filteredpurchasedCars[i].type = String(filteredpurchasedCars[i].Model);
    }
  
    let getInsuredDataType = typeof filteredpurchasedCars[i].Insured
  
    if(getInsuredDataType !=='boolean') {
      filteredpurchasedCars[i].type = Boolean(filteredpurchasedCars[i].Insured);
    }
  
    let getYearBuiltDataType = typeof filteredpurchasedCars[i].Yearbuilt
  
    if(getYearBuiltDataType !== 'number') {
      filteredpurchasedCars[i].type = Number
      (filteredpurchasedCars[i].YearBuilt)
    }
  }
  
  