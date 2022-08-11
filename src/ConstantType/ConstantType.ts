import axios from "axios";

export interface CategoriesType {
	id:number;
	ten:string;
	nguoiphutrach:string;
}

export interface ImgType {
	id : number,
	url : string;
	idLoaiSanPham: number;
	ten : string;
}

export interface TypeProduct {
	id:number;
	tenLoaiSanPham : string;
	lstAnh : ImgType[]
}
 const token : string =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI4MiIsImVtYWlsIjoiMiIsInVuaXF1ZV9uYW1lIjoiYW5oa295OTEiLCJyb2xlIjoiYWRtaW4iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zdHJlZXRhZGRyZXNzIjoiMCIsIm5iZiI6MTY2MDAxOTk0MSwiZXhwIjoxNjYwNDUxOTQxLCJpYXQiOjE2NjAwMTk5NDF9.1HCXn7bZIwRrHcxcLoHfii9MnbRfERHfd_rkfUG3ra8";

export const authAxios = axios.create({
    headers:{
      Authorization: `Bearer ${token} `
    }
  })