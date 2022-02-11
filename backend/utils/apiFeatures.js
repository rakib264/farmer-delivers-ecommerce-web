class APIFeatures {
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }
    search(){
        const keyword = this.queryStr.keyword ? {
            name:{
                $regex: this.queryStr.keyword,
                $options: 'i'
            }
        } : {}
        // console.log(keyword);
        this.query = this.query.find({...keyword});
        return this;
    }
    filter(){
        const queryCopy = {...this.queryStr};
        //Filter By Category
        const removeFields = ['keyword', 'limit', 'page'];
        removeFields.forEach(el => delete queryCopy[el]);
        // console.log(queryCopy);
        //Filter By Price
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}` );
        queryStr = JSON.parse(queryStr);
        this.query = this.query.find(queryStr);
        return this;
    }  
    pagination(resperpage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resperpage * (currentPage - 1);

        this.query = this.query.limit(resperpage).skip(skip);
        return this;
    }
}

module.exports = APIFeatures;