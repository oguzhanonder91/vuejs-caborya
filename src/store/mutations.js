import * as util from '../util/util';

export const updateTradeResult = (state, trade) => {
  state.count = trade.count;
  state.sale = trade.sale;
  state.purchase = trade.purchase;
  state.balance = trade.balance;
};

export const setIsLogin = (state, val) => {
  state.isLogin = val;
};

export const setIsLoading = (state, val) => {
  state.isLoading = val;
};

export const setMyToast = (state, val) => {
  state.myToast = val;
};

export const toggleSidebarDesktop = (state) => {
  const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow);
  state.sidebarShow = sidebarOpened ? false : 'responsive'
};

export const toggleSidebarMobile = (state) => {
  const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow);
  state.sidebarShow = sidebarClosed ? true : 'responsive'
};

export const set = (state, [variable, value]) => {
  state[variable] = value
};

export const setUser = (state, value) => {
  state.user = value;
};

export const setShowMenus = (state,values) =>{
  let menus = util.common.prepareMenus(values);
  state.showMenus = menus.showMenus;
  state.permissionMenuCodes = menus.permissionMenuCodes
};

