/**
 * Todo
 * @typedef {Object} Todo
 * @property {number} id
 * @property {string} content
 * @property {boolean} completed
 * @property {string} category
 * @property {string[]} [tags]
 */

/**
 * @function
 * @name CREATE
 * @param {Todo} todo
 */
const Create = (todo) => {};

/**
 * @function
 * @name READ
 * @param {number} id
 * @return {Todo} todo
 */
const Read = (id) => {};

/**
 * @function
 * @name UPDATE
 * @param {Todo} todo
 */
const Update = () => {};

/**
 * @function
 * @name DELETE
 * @param {string} [id]
 * @param {string} [tag]
 */
const Delete = (id, tag) => {};
