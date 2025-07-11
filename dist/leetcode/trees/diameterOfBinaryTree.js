"use strict";
class TreeNodee {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function diameterOfBinaryTree(root) {
    let res = 0;
    function recursiveFnHelper(curr) {
        if (!curr) {
            return 0;
        }
        let left = recursiveFnHelper(curr.left);
        let right = recursiveFnHelper(curr.right);
        res = Math.max(res, left + right);
        return 1 + Math.max(left, right);
    }
    recursiveFnHelper(root);
    return res;
}
;
`https://leetcode.com/problems/diameter-of-binary-tree/submissions/1694197151`;
