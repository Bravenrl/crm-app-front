import { useContext, useMemo, useState } from 'react';
import { ITEMS_PER_PAGE } from '../const';
import { PageContext } from '../providers/page-provider';

export const usePagination = (dataLength: number) => {
  const { page, setPage } = useContext(PageContext);
  const pageQty = Math.ceil(dataLength / ITEMS_PER_PAGE);

  const pageNumbers = useMemo(
    () =>
      Array(pageQty)
        .fill(null)
        .map((_, index) => ++index),
    [pageQty]
  );

  return { page, pageNumbers, setPage };
};
