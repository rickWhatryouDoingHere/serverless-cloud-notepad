// static CDN
export const CDN_PREFIX = '//gcore.jsdelivr.net/gh/s0urcelab/serverless-cloud-notepad@master/static'

// server side salt
export const SALT = SCN_SALT
// server side secret
export const SECRET = SCN_SECRET

// supported language
export const SUPPORTED_LANG = {
    'en': {
        setPW: 'Set Password',
        changePW: 'Change Password',
        share: 'Share',
        lastModified: 'Last Modified',
        copy: 'Copy',
        emptyPH: 'Change the URL to whatever you like to create a new note. You can set a password by clicking the <Set Password> button, and leave it empty to reset the password. Use the <Share> button to share the note with others, allowing them to view it without being able to modify the content.',
        tipEncrypt: 'This Note has been encrypted, please enter password!',
        tip404: '404, Nothing here',
    },
    'zh': {
        setPW: '设置密码',
        changePW: '修改密码',
        share: '分享',
        lastModified: '上次保存',
        copy: '复制',
        emptyPH: '看来你是第一个到这儿的人，写点什么吧...',
        tipEncrypt: '这是一篇加密笔记，你必须先输入密码',
        tip404: '404，你要找的东西并不存在',
    }
}
