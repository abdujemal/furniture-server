import * as MainServices from "../services/main.service.js"

export const searchAll = async (req, res) =>{
    try{
        const { col } = req.params;
        const { key, val, key2, val2, limit, isArray, isSearch } = req.query;
    
        const result = await MainServices.searchAll(
            String(col).toLocaleLowerCase(), key, val, key2, val2, isSearch == 1, isArray == 1, limit);
    
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

export const getChartData = async (req, res) =>{
    try{
        const { col } = req.params;
        const { option } = req.query;
    
        const result = await MainServices.getChartData(
            String(col).toLocaleLowerCase(), option);
    
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

export const countDocs = async (req, res) =>{
    try{
        const { col } = req.params;
        const { key, startDate, endDate, val } = req.query;

        if(!key && !startDate && !endDate || !key && !val){
            res.status(400).json({msg: "Missing data"})
        }
    
        const result = await MainServices.countDocs(
            String(col).toLocaleLowerCase(), key, startDate, endDate, val);
    
        res.status(200).json({result})
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}
