#!/bin/sh

# .env 파일이 있는지 확인
if [ ! -f .env ]; then
  echo "❌ ERROR: .env 파일이 존재하지 않습니다."
  exit 1
fi

# .env에서 CHROMATIC_TOKEN 가져오기
CHROMATIC_TOKEN=$(grep CHROMATIC_TOKEN .env | cut -d "=" -f2)

# CHROMATIC_TOKEN이 비어 있는지 확인
if [ -z "$CHROMATIC_TOKEN" ]; then
  echo "❌ ERROR: .env 파일에 CHROMATIC_TOKEN 값이 없습니다."
  exit 1
fi

# Chromatic 실행
pnpm dlx chromatic --project-token="$CHROMATIC_TOKEN" --exit-once-uploaded --allow-console-errors