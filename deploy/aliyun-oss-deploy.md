# 阿里云 OSS 静态网站部署指南

## 1. 准备工作

### 安装阿里云 CLI
```bash
npm install -g @alicloud/cli
```

### 配置阿里云凭证
```bash
aliyun configure
# 输入 AccessKey ID 和 AccessKey Secret
```

## 2. 构建项目

```bash
cd /path/to/your/project
pnpm install
pnpm run build
```

构建完成后，产物在 `dist/` 目录

## 3. 创建 OSS Bucket

登录阿里云控制台 → 对象存储 OSS → 创建 Bucket
- Bucket 名称：econ-exam（自定义，需全局唯一）
- 地域：选择离你最近的
- 存储类型：标准存储
- 读写权限：公共读

## 4. 配置静态网站托管

在 Bucket 详情页 → 基础设置 → 静态页面
- 默认首页：index.html
- 默认 404 页：index.html

## 5. 上传文件

### 方式一：使用 ossutil
```bash
# 安装 ossutil
wget http://gosspublic.alicdn.com/ossutil/1.7.14/ossutil64
chmod 755 ossutil64

# 配置
./ossutil64 config -e oss-cn-hangzhou.aliyuncs.com -i <AccessKeyID> -k <AccessKeySecret>

# 上传
./ossutil64 cp -r ./dist oss://econ-exam/ --update
```

### 方式二：使用阿里云控制台
直接拖拽 `dist/` 文件夹到 OSS 控制台上传

## 6. 绑定自定义域名（可选）

Bucket 详情页 → 传输管理 → 域名管理 → 绑定域名
- 输入你的域名，如：exam.yourschool.com
- 配置 CNAME 解析

## 7. 访问地址

- OSS 默认域名：`https://econ-exam.oss-cn-hangzhou.aliyuncs.com`
- 自定义域名：`https://exam.yourschool.com`

## 8. 更新分享海报中的 URL

部署完成后，修改 `src/components/SharePoster.tsx` 中的 `appUrl` 为实际部署地址
