CREATE (re:Report {
    standardRank: $standardRank,
    stockCode: $stockCode,
    publishDate: $publishDate,
    investRank: $investRank,
    brokerName: $brokerName,
    _createdAt: timestapm(),
    _updatedAt: timestapm()
}),
(anal:Analyst {
    name: $name,
    _updatedAt: timestapm(),
    _createdAt: timestapm()
}),
(re)<-[:Write]-(anal)

RETURN re