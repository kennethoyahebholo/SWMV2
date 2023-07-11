// Auth routes
export const REGISTER = "auth/signup";
export const LOGIN = "auth/login";
export const LOG_OUT = "auth/logout";

export const FORGOT_PASSWORD = "Authentication/forgot-password";
export const RESET_PASSWORD = "Authentication/reset-password";

//Products
export const GET_PRODUCTS = "/Product/get-products";
export const ADD_PRODUCT = "/Product/add-product";
export const UPDATE_PRODUCT = "/Product/update-product";
export const DELETE_PRODUCT = "/Product/delete-product";

//Stocks
export const GET_STOCKS = "/Stock/get-stock";
export const ADD_STOCK = "/Stock/add-stock";
export const UPDATE_STOCK = "/Stock/update-stock";
export const DELETE_STOCK = "/Stock/delete-stock";

//Sale-Offer
export const GET_SALE_OFFER = "/SaleOffer/get-saleOffer";
export const ADD_SALE_OFFER = "/SaleOffer/add-saleOffer";
export const UPDATE_SALE_OFFER = "/SaleOffer/update-saleOffer";
export const DELETE_SALE_OFFER = "/SaleOffer/delete-saleOffer";

//Administrator
export const CREATE_ROLE = "/Administrator/create-roles";
export const GET_ROLE = "/Administrator/get-all-role";
export const EDIT_ROLE = "/Administrator/edit-role";
export const DELETE_ROLE = "/Administrator/delete-role";

export const GET_USER = "/Administrator/get-all-users";
export const GET_USER_FILTER_VIEW = "/Administrator/get-user-filter-view";
export const EDIT_USER = "/Administrator/edit-user";
export const DELETE_USER = "/Administrator/delete-user";

//StaffShift
export const GET_STAFF_SHIFT = "/StaffShift/get-staffShift";
export const ADD_STAFF_SHIFT = "/StaffShift/add-staffShift";
export const UPDATE_STAFF_SHIFT = "/StaffShift/update-staffShift";
export const DELETE_STAFF_SHIFT = "/StaffShift/delete-staffShift";

export const SWM_USER_DATA = "SWM_USER_DATA";

// Request Status
export const RESPONSE_SUCCESS = "SUCCESS";
export const RESPONSE_ERROR = "FAILURE";
