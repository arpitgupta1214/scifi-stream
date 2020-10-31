class MyDate {

     nowUtc()
    {
        var now = new Date();
        return  new Date(now.getTime() + now.getTimezoneOffset() * 60000);

    }

    nowUtcUnix()
    {
        var now = new Date();
        return  new Date(now.getTime() + now.getTimezoneOffset() * 60000).getTime();

    }
}
