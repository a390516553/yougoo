import React from 'react'
import stone_logo from '@images/stone_logo.png'

function Footer() {
    return (
        <div className="px-4 md:px-24 bg-gray-800 text-white py-8">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-4 flex flex-col items-center md:items-start mb-2">
                    <div className="mb-2 md:mb-0">
                        <img src={stone_logo} className="h-8 w-auto" alt="" />
                    </div>
                    <div className="mt-2 md:mt-10 text-sm text-gray-300">Copyright © 2021, STONE</div>
                </div>
                <div className="md:col-span-4 flex flex-col items-center md:items-start">
                    <div className="font-bold mb-2 md:mb-4">社区</div>
                    <div className="flex flex-col mb-2 text-sm">
                        <a className="text-center md:text-left mb-1 text-gray-300 hover:text-from" href="https://twitter.com/DefiStone" target="_blank" rel="noreferrer">
                            外链服务
                        </a>
                        <a className="text-center md:text-left mb-1 text-gray-300 hover:text-from" href="https://discord.com/invite/MyYqNBF8TP" target="_blank" rel="noreferrer">
                            咨询服务
                        </a>
                    </div>
                </div>
                <div className="md:col-span-3 flex flex-col items-center md:items-start">
                    <div className="mb-2 md:mb-4 font-bold">有用的链接</div>
                    <a className="mb-1 text-sm text-gray-300 hover:text-from" href="" target="_blank" rel="noreferrer">文档</a>
                </div>
                <div className="md:col-span-1 flex flex-col items-center md:items-start mt-2 md:mt-0 mb-3 md:mb-0">
                    联系我们
                </div>
            </div>
            <div className="text-white text-sm text-center mt-4 md:mt-8"><a className="text-white hover:text-from" href="https://beian.miit.gov.cn" target="_blank">粤ICP备2021167156号</a></div>
        </div>
    )
}

export default Footer
