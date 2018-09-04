import stream from 'stream';
interface Options
{
    objectMode: boolean;
    [propName: string]: any;
}

declare class bufferstreams extends stream.Duplex
{
    constructor(callback: (err: Error | null, buf: Buffer | null, cb: (err?: Error, buf?: Buffer)=>void)=>void);

    constructor(options: Options, callback: (err: Error | null, buf: Buffer | null, cb: (err?: Error, buf?: Buffer)=>void)=>void);
}

export default bufferstreams;