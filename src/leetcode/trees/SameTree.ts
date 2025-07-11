class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // write base case
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;

    const left = isSameTree(p.left, q.left)
    const right = isSameTree(p.right, q.right)

    return left && right
};

// leetcode submission link
`https://leetcode.com/problems/same-tree/submissions/1693125626`
