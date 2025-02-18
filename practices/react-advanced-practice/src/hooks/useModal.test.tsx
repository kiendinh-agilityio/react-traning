import { renderHook, act } from '@testing-library/react';
import { useModal } from '@/hooks';
import { profileAuthor } from '@/utils';
import { PROFILE_AUTHORS } from '@/mocks';

describe('useModal Hook', () => {
  it('should initialize correctly', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.isModalOpen).toBe(false);
    expect(result.current.isUpdate).toBe(false);
    expect(result.current.isConfirmModalOpen).toBe(false);
    expect(result.current.selectedAuthor).toEqual(profileAuthor);
  });

  it('should open add modal with default author', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.handleShowAddModal();
    });

    expect(result.current.isModalOpen).toBe(true);
    expect(result.current.isUpdate).toBe(false);
    expect(result.current.selectedAuthor).toEqual(profileAuthor);
  });

  it('should open edit modal with selected author', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.handleShowEditModal(PROFILE_AUTHORS);
    });

    expect(result.current.isModalOpen).toBe(true);
    expect(result.current.isUpdate).toBe(true);
    expect(result.current.selectedAuthor).toEqual(PROFILE_AUTHORS);
  });

  it('should open confirm modal with author ID', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.handleShowConfirmModal('456');
    });

    expect(result.current.isConfirmModalOpen).toBe(true);
    expect(result.current.selectedAuthor.id).toBe('456');
  });

  it('should close both modals', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.handleShowAddModal();
      result.current.handleCloseModal();
    });

    expect(result.current.isModalOpen).toBe(false);
    expect(result.current.isConfirmModalOpen).toBe(false);
  });
});
