class BoardsController < ApplicationController
  before_action :set_boards, only: :new
  before_action :set_board, only: :update

  def new
    @board = Board.new
  end

  def create
    @board = Board.new(board_params)
    if @board.save

    else

    end
  end

  def update
    if @board.update(board_params)
    else
    end
  end

  private

  def board_params
    params.require(:board).permit(:name, :color).merge(user: current_user)
  end

  def set_boards
    @boards = current_user.boards
  end

  def set_board
    @board = Board.find(params[:id])
  end
end
