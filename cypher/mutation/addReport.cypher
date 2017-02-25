CREATE (re:Report {
    stockCode: $stockCode,
    author: $author,
    publishDate: $publishDate,
    investRank: $investRank,
    standardRank: $standardRank,
    brokerName: $brokerName,
    _createdAt: timestapm()
})
RETURN re