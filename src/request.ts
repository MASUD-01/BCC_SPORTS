export const production_url: string = 'https://bcc.binaricbyte.com/api';
export const local_url = 'http://10.10.220.45:9500/api/v1';

export const imageHostLink = 'https://m360ict-data.s3.ap-south-1.amazonaws.com/sohi-airport';
export const grnImageBase = '';

export const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';
export const baseURL: string = isProduction ? production_url : local_url;
