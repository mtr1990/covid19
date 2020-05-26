/**
 * Client
 */

export const path_CLIENT = {
  about: `/about`,

  projects: {
    root: `/projects/`,
    byId: `/projects/:name`,
  },
};

/**
 * Guideline
 */
let root_GUIDELINE = "/guideline";
export const path_GUIDELINE = {
  root: root_GUIDELINE,
  typography: `${root_GUIDELINE}/typography`,
  buttons: `${root_GUIDELINE}/buttons`,
  forms: `${root_GUIDELINE}/forms`,
  toast: `${root_GUIDELINE}/toast`,
  shadows: `${root_GUIDELINE}/shadows`,
};

/**
 * DashboardPage
 */
let root_DASHBOARD = "/D_A_S_H_B_O_A_R_D";
export const path_DASHBOARD = {
  root: root_DASHBOARD,
  login: `/login`,
  emails: `${root_DASHBOARD}/emails`,

  projects: {
    create: `${root_DASHBOARD}/project/create`,
    edit: `${root_DASHBOARD}/project/edit/:id`,
    link_edit: `${root_DASHBOARD}/project/edit`,
  },

  categories: {
    root: `${root_DASHBOARD}/categories`,
    create: `${root_DASHBOARD}/categories/create`,
    edit: `${root_DASHBOARD}/categories/edit/:id`,
    link_edit: `${root_DASHBOARD}/categories/edit`,
  },

  users: {
    root: `${root_DASHBOARD}/users`,
    create: `${root_DASHBOARD}/users/create`,
  },
};
