class ListsController < ApplicationController
  before_action :set_board, only: [:new, :create]

  def new
    @list = List.new
  end

  def create
    binding.pry
    @list = List.new(list_params)
    if @list.save

    else

    end
  end

  private

  def list_params
    params.require(:list).permit(:name).merge(board: @board)
  end

  def set_board
    @board = Board.find(params[:board_id])
  end
end
