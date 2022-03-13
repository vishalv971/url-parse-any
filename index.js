function buildSubDomain(subDomainArray) {
    let subDomainString = "";
    subDomainArray.map((subDomain) => {
        subDomainString += subDomain + ".";
    });

    return subDomainString.substring(0, subDomainString.length - 1);
}

module.exports  = function parse(url) {
    let returnedUrlObject = {};
    let splitURLForProtocol = url.split("://");
    returnedUrlObject.url = splitURLForProtocol[0];
    let restOftheURL = splitURLForProtocol[1];
    returnedUrlObject.hostname = restOftheURL.split("/", 1)[0];
    let hostname = returnedUrlObject.hostname;

    domainSplitArray = hostname.split(".");
    returnedUrlObject.tld = domainSplitArray[domainSplitArray.length - 1];
    returnedUrlObject.domain =
        domainSplitArray[domainSplitArray.length - 2] +
        "." +
        returnedUrlObject.tld;

    returnedUrlObject.subDomain = buildSubDomain(
        domainSplitArray.slice(0, domainSplitArray.length - 2)
    );
    console.log(returnedUrlObject);
}

parse("https://github.com/foo/bar");
