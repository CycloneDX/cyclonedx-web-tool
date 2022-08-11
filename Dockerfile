# syntax=docker/dockerfile:1.4
FROM python:3-alpine
ARG VERSION

WORKDIR /wwwroot
ADD "https://github.com/CycloneDX/cyclonedx-web-tool/releases/download/v${VERSION}/CycloneDX.WebTool.${VERSION}.tar.gz" /tmp
RUN tar xvfz /tmp/CycloneDX.WebTool.${VERSION}.tar.gz

ENTRYPOINT [ "python3", "-m", "http.server"]
CMD [ "8000" ]