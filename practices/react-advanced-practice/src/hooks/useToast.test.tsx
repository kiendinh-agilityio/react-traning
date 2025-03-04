import { renderHook, act } from '@testing-library/react';
import { useToast } from './useToast';
import { Notification } from '@/types';

describe('useToast hook', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useToast());

    expect(result.current.toastMessage).toBe('');
    expect(result.current.toastType).toBe(Notification.Success);
    expect(result.current.isToastOpen).toBe(false);
  });

  it('should update state when calling handleShowToast', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.handleShowToast('Test Message', Notification.Failed);
    });

    expect(result.current.toastMessage).toBe('Test Message');
    expect(result.current.toastType).toBe(Notification.Failed);
    expect(result.current.isToastOpen).toBe(true);
  });

  it('should close the toast when calling handleCloseToast', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.handleShowToast('Another Message', Notification.Success);
    });

    expect(result.current.isToastOpen).toBe(true);

    act(() => {
      result.current.handleCloseToast();
    });

    expect(result.current.isToastOpen).toBe(false);
  });
});
