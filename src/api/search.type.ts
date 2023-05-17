/* eslint-disable no-unused-vars */
import { BaseResponseType } from 'api';
import { AxiosRequestConfig } from 'axios';

export interface SearchParamsType {
  q: string;
  page?: number;
  limit?: number;
}

export interface SearchPayLoadType {
  q: string;
  page: number;
  limit: number;
  result: string[];
  qty: number;
  total: number;
}

export interface SearchResponseType extends BaseResponseType {
  data: SearchPayLoadType;
}

export interface SearchApiRequest {
  get: (
    params: SearchParamsType,
    request?: AxiosRequestConfig,
  ) => Promise<SearchResponseType>;
}

// q	        string	쿼리 키워드
// page	        number	현재 페이지 번호
// limit	    number	per page 사이즈
// result	    string[]	limit이 적용되어 q로 필터된 리스트
// qty	        number	result의 길이
// total	    number	q로 필터된 총 result 길이
