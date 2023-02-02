/**
 * Todo
 * @typedef {Object} Todo - 할 일
 * @property {number} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} completed - 완료 여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 태그들
 */

/**
 * 할 일을 추가할 수 있다.
 * @function
 * @name CREATE
 * @param {Todo} todo - 새로 추가할 할 일
 */
const Create = (todo) => {};

/**
 * 모든 할 일을 조회할 수 있다.
 * @function
 * @name READ
 * @param {number} id - 조회할 일의 아이디
 * @return {Todo} todo - 조회된 할일
 */
const Read = (id) => {};

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * @function
 * @name UPDATE
 * @param {Todo} todo - 수정할 할일
 */
const Update = () => {};

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @function
 * @name DELETE
 * @param {string} [id] - 삭제하고자 하는 일의 아이디
 * @param {string[]} [tags] - 삭제하고자 하는 일의 태그들
 */
const Delete = (id, tags) => {};
