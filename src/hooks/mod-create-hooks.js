/// <reference path="../../pb_data/types.d.ts" />
// @ts-check

module.exports = [
    (record, user) => { // Hook to check if publicApprovalStatus is set or not and set it to 'pending' if isPublic is true
        if (record.get('publicApprovalStatus')) {
            return {
                status: false,
                message: "Record creation failed: publicApprovalStatus is already set"
            }
        }
        if (record.get('isPublic')) {
            record.set('publicApprovalStatus', 'pending');
        }
        record.set('createdBy', user.id);
        record.set('version', 1);
        return {
            status: true,
            message: "Record creation successful",
        }
    }
]