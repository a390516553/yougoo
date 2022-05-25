import React from "react";
import ban from "@images/ban.png";
import ban2 from "@images/ban2.png";
import you1 from "@images/you1.jpg";
import you2 from "@images/you2.jpg";
import you3 from "@images/you3.jpg";
import you4 from "@images/you4.jpg";
import question from "@images/question.png";
import right from "@images/right.png";
import language from "@images/language.png";
import why2 from "@images/why2.png";
import why3 from "@images/why3.png";
import why4 from "@images/why4.png";
import why5 from "@images/why5.png";
import why6 from "@images/why6.png";
import seo from "@images/seo.png";
import macbook from "@images/macbook.png";
import { Button } from "antd";

function Home() {
  return (
    <div className="bg-conbg">
      <div
        className="bg-center bg-cover bg-no-repeat pb-0 md:pb-24"
        style={{ backgroundImage: `url(${ban})` }}
      >
        <div className="flex flex-col md:flex-row px-4 md:px-24">
          <div className="flex-1 pt-6 md:pt-12">
            <div className="text-2xl md:text-3xl">
              <span className="text-seo">YouTube 频道权重</span>
              <span className="text-title">——直播视频曝光</span>
            </div>
            <p className="text-sm text-white mt-6 md:mt-10 pr-0 md:pr-14 leading-relaxed font-light">
              提供独特且自然的SEO流量，增强直播视频展示数量
              、视频曝光次数，提高YouTube频道权重、直播视频排名、回放视频排名，吸引更多的用户关注
              。
            </p>
          </div>
          <div className="flex-1 pt-6 md:pt-6">
            <img src={ban2} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 mt-14 px-4 md:px-24">
        <div className="text-sm">
          <img src={you1} alt="" />
          <p className="mt-4 mb-1 text-center">了解信息</p>
        </div>
        <div className="text-sm">
          <img src={you2} alt="" />
          <p className="mt-4 mb-1 text-center">了解信息</p>
        </div>
        <div className="text-sm">
          <img src={you3} alt="" />
          <p className="mt-4 mb-1 text-center">了解信息</p>
        </div>
        <div className="text-sm">
          <img src={you4} alt="" />
          <p className="mt-4 mb-1 text-center">了解信息</p>
        </div>
      </div> */}
      {/* <div className="mt-12 md:mt-24 px-4 md:px-24">
                <h1 className="text-center text-2xl md:text-3xl text-h1Color font-bold">你是否也遇到这样的问题？</h1>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div><img src={question} alt="" /></div>
                    <div className="ml-0 md:ml-10 mt-4 md:mt-16">
                        <div className="space-y-5 border-l-4 w-80 md:w-96 border-qus rounded-tr-3xl rounded-br-3xl py-4 pl-2 pr-2" style={{ background: '#F8FDFB' }}>
                            <div>
                                <img className="inline-block" src={right} alt="" />
                                <span className="ml-2 font-light" style={{ fontSize: '15px' }}>找个做内容推广的无奈工资太高</span>
                            </div>
                            <div>
                                <img className="inline-block" src={right} alt="" />
                                <span className="ml-2 font-light" style={{ fontSize: '15px' }}>想招人过来但是英语语言不地道</span>
                            </div>
                            <div>
                                <img className="inline-block" src={right} alt="" />
                                <span className="ml-2 font-light" style={{ fontSize: '15px' }}>上班没两月，花了大量时间培训，员工离职了</span>
                            </div>
                            <div>
                                <img className="inline-block" src={right} alt="" />
                                <span className="ml-2 font-light" style={{ fontSize: '15px' }}>项目迟迟启动不了，无限期拖延</span>
                            </div>
                            <div>
                                <img className="inline-block" src={right} alt="" />
                                <span className="ml-2 font-light" style={{ fontSize: '15px' }}>自己也不是很懂，不知道怎么考核</span>
                            </div>
                            <div>
                                <img className="inline-block" src={right} alt="" />
                                <span className="ml-2 font-light" style={{ fontSize: '15px' }}>找老外，沟通不及时，人员参差不齐</span>
                            </div>
                            <div>
                                <img className="inline-block" src={right} alt="" />
                                <span className="ml-2 font-light" style={{ fontSize: '15px' }}>没有详细报告，不知道中间做了什么</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-2xl md:text-3xl text-h1Color text-center font-bold mt-10 md:mt-4">英文写作为什么选大棠？</h1>
                <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-24">
                    <div className="border-l-4 border-qus rounded-xl bg-white flex py-6 px-6 shadow">
                        <div className="mr-6"><img src={language} alt="" /></div>
                        <div className="">
                            <h1 className="text-xl">语言地道</h1>
                            <p className="font-light leading-relaxed mt-2" style={{ fontSize: '13px' }}>拥有欧美本地专业的编辑，经过多年合作筛选，文章质量有保证</p>
                        </div>
                    </div>
                    <div className="border-l-4 border-qus rounded-xl bg-white flex py-6 px-6 shadow">
                        <div className="mr-6"><img src={why2} alt="" /></div>
                        <div className="">
                            <h1 className="text-xl">语言地道</h1>
                            <p className="font-light leading-relaxed mt-2" style={{ fontSize: '13px' }}>拥有欧美本地专业的编辑，经过多年合作筛选，文章质量有保证</p>
                        </div>
                    </div>
                    <div className="border-l-4 border-qus rounded-xl bg-white flex py-6 px-6 shadow">
                        <div className="mr-6"><img src={why3} alt="" /></div>
                        <div className="">
                            <h1 className="text-xl">语言地道</h1>
                            <p className="font-light leading-relaxed mt-2" style={{ fontSize: '13px' }}>拥有欧美本地专业的编辑，经过多年合作筛选，文章质量有保证</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-24">
                    <div className="border-l-4 border-qus rounded-xl bg-white flex py-6 px-6 shadow">
                        <div className="mr-6"><img src={why4} alt="" /></div>
                        <div className="">
                            <h1 className="text-xl">语言地道</h1>
                            <p className="font-light leading-relaxed mt-2" style={{ fontSize: '13px' }}>拥有欧美本地专业的编辑，经过多年合作筛选，文章质量有保证</p>
                        </div>
                    </div>
                    <div className="border-l-4 border-qus rounded-xl bg-white flex py-6 px-6 shadow">
                        <div className="mr-6"><img src={why5} alt="" /></div>
                        <div className="">
                            <h1 className="text-xl">语言地道</h1>
                            <p className="font-light leading-relaxed mt-2" style={{ fontSize: '13px' }}>拥有欧美本地专业的编辑，经过多年合作筛选，文章质量有保证</p>
                        </div>
                    </div>
                    <div className="border-l-4 border-qus rounded-xl bg-white flex py-6 px-6 shadow">
                        <div className="mr-6"><img src={why6} alt="" /></div>
                        <div className="">
                            <h1 className="text-xl">语言地道</h1>
                            <p className="font-light leading-relaxed mt-2" style={{ fontSize: '13px' }}>拥有欧美本地专业的编辑，经过多年合作筛选，文章质量有保证</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 md:px-24">
                <h1 className="text-2xl md:text-3xl text-h1Color text-center font-bold mt-10 md:mt-14">内容服务流程</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                    <div>
                        <div className="border-l-4 border-qus text-sm font-serif leading-loose px-2">
                            套餐分中阶和高阶，对应的是写手的等级，但是我们保证套餐内海外写手都有半年以上的专业写作经验，
                            每篇文章都是由英语母语国家专业作者撰写，所以文章质量请您放心，每篇文章完成后，
                            还会由我们我们专业校稿员（英语专八以上）进行校稿并做SEO优化，校稿包括关键词优化，
                            长尾词优化，H1，H2优化，meta description撰写，查重等多方位检查并形成报告。
                        </div>
                        <div className='space-y-4 mt-8'>
                            <div>
                                <img className="inline-block" src={right} alt="" />
                                <span className="ml-2 font-serif text-sm">请按照您的文章篇幅选择适合您的套餐</span>
                            </div>
                            <div>
                                <img className="inline-block" src={right} alt="" />
                                <span className="ml-2 font-serif text-sm">请您提供下关键词，我们进行关键词分析并在文章中插入同义词和长尾词</span>
                            </div>
                            <div>
                                <img className="inline-block" src={right} alt="" />
                                <span className="ml-2 font-serif text-sm">我们会充分理解您的需求并转达给海外写手</span>
                            </div>
                            <div>
                                <img className="inline-block" src={right} alt="" />
                                <span className="ml-2 font-serif text-sm">每一篇文章写完后都会经过我们校稿优化，不过关的退回重写</span>
                            </div>
                            <div>
                                <img className="inline-block" src={right} alt="" />
                                <span className="ml-2 font-serif text-sm">验证完成后我们会把文章和报告通过邮件发送给您</span>
                            </div>
                            <div>
                                <img className="inline-block" src={right} alt="" />
                                <span className="ml-2 font-serif text-sm">您可以对我们的服务进行打分</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center md:text-left ml-0 md:ml-20">
                        <img src={seo} alt="" />
                        <div className="ml-0 md:ml-20 pl-0 md:pl-2">
                            <Button className="w-64" type="primary" shape="round" size="large" style={{ background: '#FFDE56', borderColor: '#FFDE56', color: 'black' }}>点击服务</Button>
                        </div>
                        <div className="mt-8 ml-0 md:ml-20 pl-0 md:pl-2">
                            <Button className="w-64 bg-butBg" type="primary" shape="round" size="large" style={{ background: '#FFDE56', borderColor: '#FFDE56', color: 'black' }}>点击服务</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 md:px-24 grid grid-cols-1 md:grid-cols-2 mt-12 md:mt-20 pb-10 bg-gradient-to-r from-from to-to">
                <div className="mt-10 md:mt-20">
                    <div className="text-center text-3xl font-bold">增加曝光</div>
                    <div className="text-center text-3xl font-bold mt-6">上大棠</div>
                    <div className="text-center mt-8 md:mt-16">
                        <Button className="w-64" type="primary" shape="round" size="large" style={{ background: '#FFDE56', borderColor: '#FFDE56', color: 'black' }}>点击服务</Button>
                    </div>
                    <div className="mt-10 text-center">
                        <Button className="w-64 bg-butBg" type="primary" shape="round" size="large" style={{ background: '#FFDE56', borderColor: '#FFDE56', color: 'black' }}>点击服务</Button>
                    </div>
                </div>
                <div className="text-left md:text-center mt-10 md:mt-0">
                    <img src={macbook} alt="" />
                </div>
            </div> */}
    </div>
  );
}

export default Home;
